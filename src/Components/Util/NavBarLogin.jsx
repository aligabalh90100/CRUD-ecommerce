import React, { useEffect, useState } from "react";
import logo from "../../Assests/logo.png";
import login from "../../Assests/login.png";
import cart from "../../Assests/cart.png";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import NavbarSearchHook from "../../logicHook/search/NavbarSearchHook";
import { Link, useNavigate } from "react-router-dom";

const NavBarLogin = () => {
  const [user, setUser] = useState("");
  const naviagte = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setUser(JSON.parse(localStorage.getItem("data")));
    }
  }, []);
  function logOut() {
    localStorage.removeItem("data");
    localStorage.removeItem("token");
    setUser("");
  }
  const { setSeachWord } = NavbarSearchHook();
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={localStorage.getItem("searchKeyword")}
            onChange={(e) => {
              localStorage.setItem("searchKeyword", e.target.value);
              setSeachWord(e.target.value);
              // const path = window.location.pathname;
              // if (path !== "/products") {
              //   window.location.href = "/products";
              // }
              naviagte("/products");
            }}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user.name ? (
              <NavDropdown title={`${user.name}`} id="basic-nav-dropdown">
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    الصفحة الشخصية
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item href="/" onClick={logOut}>
                  تسجيل الخروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                // href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <Link to="/login">
                  <p style={{ color: "white" }}>دخول</p>
                </Link>
              </Nav.Link>
            )}
            <Nav.Link
              // href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <Link to="/cart">
                <p style={{ color: "white" }}>العربه</p>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
