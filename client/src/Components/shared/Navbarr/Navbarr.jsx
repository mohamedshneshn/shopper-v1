import React from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../Assets/logo.png";

import "./Navbarr.css";

const Navbarr = () => {
  return (
    <Navbar expand="lg" className=" navbar-container mt-2  ">
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span className="navbar-brand-text fs-1 fw-bold">SHOPPER</span>
          </div>
        </Navbar.Brand>

        {/* Navbar toggler for mobile view */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Navbar content */}
        <Navbar.Collapse id="navbarNav">
          {/* Middle section with links */}
          <Nav className="mx-auto gap-3 fs-5">
            <Nav.Link href="/" className="nav-linkk">
              Shop
            </Nav.Link>
            <Nav.Link href="/men" className="nav-linkk">
              Men
            </Nav.Link>
            <Nav.Link href="/women" className="nav-linkk">
              Women
            </Nav.Link>
            <Nav.Link href="/kids" className="nav-linkk">
              Kids
            </Nav.Link>
          </Nav>

          {/* Right section with login button and cart icon with counter */}
          <Nav className="ml-auto d-flex align-items-center gap-3 nav-login-cart">
            {/* Login button */}
            <Button className="login-btn" href="/login">
              Login
            </Button>

            {/* Cart icon with counter */}
            <Nav.Link href="/cart" className="position-relative">
              <i className="bi bi-cart3 fs-2"></i>{" "}
              <Badge
                pill
                bg="danger"
                className="cart-counter position-absolute top-0 start-100 translate-middle mt-3"
              >
                0
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbarr.css";
// import logo from "../../Assets/logo.png";
// import cart_icon from "../../Assets/cart_icon.png";

// const Navbarr = () => {
//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>SHOPPER</p>
//       </div>
//       <ul className="nav-menu">
//         <li>
//           <Link to="/" style={{ textDecoration: "none" }}>
//             Shop
//           </Link>
//         </li>
//         <li>
//           <Link to="/Men" style={{ textDecoration: "none" }}>
//             Men
//           </Link>
//         </li>
//         <li>
//           <Link to="/women" style={{ textDecoration: "none" }}>
//             Women
//           </Link>
//         </li>
//         <li>
//           <Link to="/kids" style={{ textDecoration: "none" }}>
//             Kids
//           </Link>
//         </li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to="/login">
//           <button>Login</button>
//         </Link>

//         <Link to="cart">
//           <img src={cart_icon} alt="" />
//         </Link>
//         <div className="nav-cart-count">
//           <p>0</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbarr;
