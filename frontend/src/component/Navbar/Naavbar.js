import { Fragment, useState, useRef, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Naavbar() {
  const [activeButton, setActiveButton] = useState("");

  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 flex flex-wrap items-center justify-between">
          <a href="/" className="navbar-brand flex items-center">
            <img
              src="/log2/SEPCAM Logo (1).png"
              alt="SEPCAM LOGO"
              className="h-9 mr-3 sm:h-12"
            />
            <span className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900">
              THE SCEPTRE OF
              <br className="sm:hidden" /> POWER CHRISTIAN MINISTRY
            </span>
          </a>

          <button
            onClick={() => setActiveButton(!activeButton)}
            className="navbar-toggler flex sm:hidden border-0 px-3 py-2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="flex-grow"></div>

          <form className="hidden sm:flex" action="#" method="GET">
            <input
              className="form-control w-full max-w-xs"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{backgroundColor:"#002171", color:"white"}}>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white"}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{color: "white"}}>HOME</Nav.Link>
              <NavDropdown title="ABOUT" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/about/our-call" style={{color: "white"}}>Our Call</NavDropdown.Item>
                <NavDropdown.Item href="/about/our-history" style={{color: "white"}}>Our History</NavDropdown.Item>
                <NavDropdown.Item href="/about/leadership" style={{color: "white"}}>Leadership</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about/unit-department" style={{color: "white"}}>Unit/Department</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/resources" style={{color: "white"}}>RESOURCES</Nav.Link>
              <Nav.Link href="/church-online" style={{color: "white"}}>CHURCH ONLINE</Nav.Link>
              <Nav.Link href="/academy" style={{color: "white"}}>ACADEMY</Nav.Link>
              <Nav.Link href="/contact" style={{color: "white"}}>CONTACT</Nav.Link>
              <Nav.Link href="/blog" style={{color: "white"}}>BLOG</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
