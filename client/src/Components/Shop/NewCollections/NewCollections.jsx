import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import new_collections from "../../../Assets/new_collections";
import Item from "../../shared/Item/Item";
import "./NewCollections.css";

const NewCollections = () => {
  return (
    <Container className="mt-5 mb-5">
      {/* Header row */}
      <Row className="mb-4">
        <Col lg={12} md={12} sm={12} className="text-center">
          <h2>New Collections</h2>
          <hr
            style={{
              width: "100px",
              height: "3px",
              backgroundColor: "#000",
              margin: "10px auto",
            }}
          />
        </Col>
      </Row>

      {/* Row containing items */}
      <Row className="new-collections-row">
        {new_collections.map((collection) => (
          <Col lg={3} md={6} sm={12} key={collection.id} className="card gap-3">
            <Item
              id={collection.id}
              image={collection.image}
              name={collection.name}
              new_price={collection.new_price}
              old_price={collection.old_price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewCollections;
