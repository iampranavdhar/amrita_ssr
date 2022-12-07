import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/amrita_logo.png";
import light_logo from "../Assets/amrita_logo_lightmode.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const [pathName, setPathName] = useState(window.location.pathname);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={window.scrollY >= 20 ? logo : light_logo}
            className="img-fluid logo"
            alt="brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  setPathName("/");
                }}
                style={{
                  color:
                    window.scrollY >= 20
                      ? "#fff"
                      : pathName === "/"
                      ? "#fff"
                      : "#000",
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {
                  updateExpanded(false);
                  setPathName("/project");
                }}
                style={{
                  color:
                    window.scrollY >= 20
                      ? "#fff"
                      : pathName === "/"
                      ? "#fff"
                      : "#000",
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/testimonials"
                onClick={() => {
                  updateExpanded(false);
                  setPathName("/testimonials");
                }}
                style={{
                  color:
                    window.scrollY >= 20
                      ? "#fff"
                      : pathName === "/"
                      ? "#fff"
                      : "#000",
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Testimonials
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contributors"
                onClick={() => {
                  updateExpanded(false);
                  setPathName("/contributors");
                }}
                style={{
                  color:
                    window.scrollY >= 20
                      ? "#fff"
                      : pathName === "/"
                      ? "#fff"
                      : "#000",
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contributors
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
