import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../style/common.style.css";
import { LOGIN } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userReducer.userLogin);

  function logout(event) {
    event.preventDefault();
    localStorage.removeItem("access_token");
    navigate("/login");
  }
  return (
    <div>
      <Navbar bg="secondary" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#" className="text fw-bold text-white">
            <Link to="/" className="text-decoration-none text-white">brilianrn</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" aria-controls="navbarScroll">
            <Nav>
              <Nav.Link href="#home" className="items text text-white">
                <Link to="/" className="text-decoration-none text-white">Home</Link>
              </Nav.Link>
              <Nav.Link href="#portfolio" className="items text text-white">
                <Link to="/profile/12" className="text-decoration-none text-white">Profile</Link>
              </Nav.Link>
              {userLogin?.role === "admin" ?
                <Nav.Link href="#portfolio" className="items text text-white">
                  <Link to="/list-customer" className="text-decoration-none text-white">List Customer</Link>
                </Nav.Link>
                : <></>}
              <NavDropdown title={<img src={userLogin ? userLogin?.photo : LOGIN} alt="user" className="corner-image" height={29} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={(event) => logout(event)}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
