import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Item from "../../Components/shared/Item/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Define how many items per page
  const [sortBy, setSortBy] = useState("Feature");

  // Calculate total pages

  const totalPages = Math.ceil(
    all_products.filter((product) => product.category === props.category)
      .length / itemsPerPage
  );

  // Handle sorting
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement sorting logic based on the selected sortBy option
    // e.g., sorting all_products array
  };

  // Handle pagination
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the index range of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = all_products
    .filter((product) => product.category === props.category)
    .slice(startIndex, endIndex);

  return (
    <Container className="mt-5 mb-5">
      {/* Header row */}
      <Row className="mb-4">
        <Col lg={12} md={12} sm={12} className="text-center mb-5">
          <img src={props.image} alt="not available" className="img-fluid" />
        </Col>
      </Row>

      {/* Extra row with dropdown menu and navigation controls */}
      <Row className="mb-4">
        {/* Left column with dropdown menu */}
        <Col lg={6} md={12} sm={12} className="mb-3">
          <Form.Control as="select" value={sortBy} onChange={handleSortChange}>
            <option value="Feature">Sort by: Feature</option>
            <option value="New Arrivals">New Arrivals</option>
            <option value="Best Sellers">Best Sellers</option>
            <option value="Price Low-High">Price Low-High</option>
            <option value="Price High-Low">Price High-Low</option>
          </Form.Control>
        </Col>

        {/* Right column with navigation controls */}
        <Col lg={6} md={12} sm={12} className="text-end">
          <Button
            variant="light"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            &lt;
          </Button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="light"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            &gt;
          </Button>
        </Col>
      </Row>

      {/* Row containing items */}
      <Row className="new-collections-row mt-5">
        {currentItems.map(
          (collection) =>
            collection.category === props.category && (
              <Col
                lg={3}
                md={6}
                sm={12}
                key={collection.id}
                className="card gap-3"
              >
                <Item
                  id={collection.id}
                  image={collection.image}
                  name={collection.name}
                  new_price={collection.new_price}
                  old_price={collection.old_price}
                />
              </Col>
            )
        )}
      </Row>
    </Container>
  );
};

export default ShopCategory;
