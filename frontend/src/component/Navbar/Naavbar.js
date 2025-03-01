import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Bars3Icon } from '@heroicons/react/24/outline'; // Import the icon

export default function Naavbar() {
  const [activeButton, setActiveButton] = useState(false); // Initialize as false

  return (
    <div>
      <nav className="navbar bg-white shadow-md">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 flex flex-wrap items-center justify-between">
          {/* Logo and Church Name (Left Side) */}
          <a href="/" className="navbar-brand flex items-center">
            <img
              src="/log2/SEPCAM Logo (1).png"
              alt="SEPCAM LOGO"
              className="h-16 mr-4 sm:h-20 md:h-24 lg:h-28"
            />
            <span className="text-base sm:text-lg lg:text-2xl font-bold text-blue-900">
              THE SCEPTRE OF POWER
              <br className="" /> {/* New line on medium and large screens */}
              CHRISTIAN MINISTRY
            </span>
          </a>

          {/* Mobile Toggle (Hamburger Icon) */}
          <button
            onClick={() => setActiveButton(!activeButton)}
            className="sm:hidden border-0 px-3 py-2 text-blue-900 hover:text-blue-700 focus:outline-none" // Styled the button
            aria-label="Toggle Navigation"
          >
            ☰ {/* Hamburger Icon */}
            <Bars3Icon className="h-8 w-8 text-blue-900" aria-hidden="true" />
          </button>

          {/* Navigation Links (Right Side) - Moved to the right using flex-grow */}
          <div className="hidden sm:flex flex-grow justify-end">
            <Navbar expand="sm" className="bg-white">
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/" style={{ color: "#002171" }} className="font-bold">HOME</Nav.Link>
                  <NavDropdown title={<span style={{ color: "#002171" }} className="font-bold">ABOUT <span className="dropdown-toggle-icon" style={{ color: "#002171" }} /></span>} id="collapsible-nav-dropdown" menuVariant="light">
                    <NavDropdown.Item href="/about/our-call" style={{ color: "#002171" }} className="font-bold">Our Call</NavDropdown.Item>
                    <NavDropdown.Item href="/about/our-history" style={{ color: "#002171" }} className="font-bold">Our History</NavDropdown.Item>
                    <NavDropdown.Item href="/about/leadership" style={{ color: "#002171" }} className="font-bold">Leadership</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/about/unit-department" style={{ color: "#002171" }} className="font-bold">Unit/Department</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/resources" style={{ color: "#002171" }} className="font-bold">RESOURCES</Nav.Link>
                  <Nav.Link href="/church-online" style={{ color: "#002171" }} className="font-bold">CHURCH ONLINE</Nav.Link>
                  <Nav.Link href="/academy" style={{ color: "#002171" }} className="font-bold">ACADEMY</Nav.Link>
                  <Nav.Link href="/contact" style={{ color: "#002171" }} className="font-bold">CONTACT</Nav.Link>
                  <Nav.Link href="/blog" style={{ color: "#002171" }} className="font-bold">BLOG</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          {/* Mobile Navigation (Hidden on larger screens) */}
          <div
            className={`sm:hidden w-full mt-4 ${activeButton ? 'block' : 'hidden'}`}
          >
            <Nav className="flex flex-col">
              <Nav.Link href="/" style={{ color: "#002171" }} className="py-2 font-bold">HOME</Nav.Link>
              <NavDropdown title={<span style={{ color: "#002171" }} className="font-bold">ABOUT</span>} id="mobile-nav-dropdown" menuVariant="light" className="py-2">
                <NavDropdown.Item href="/about/our-call" style={{ color: "#002171" }} className="font-bold">Our Call</NavDropdown.Item>
                <NavDropdown.Item href="/about/our-history" style={{ color: "#002171" }} className="font-bold">Our History</NavDropdown.Item>
                <NavDropdown.Item href="/about/leadership" style={{ color: "#002171" }} className="font-bold">Leadership</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about/unit-department" style={{ color: "#002171" }} className="font-bold">Unit/Department</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/resources" style={{ color: "#002171" }} className="py-2 font-bold">RESOURCES</Nav.Link>
              <Nav.Link href="/church-online" style={{ color: "#002171" }} className="py-2 font-bold">CHURCH ONLINE</Nav.Link>
              <Nav.Link href="/academy" style={{ color: "#002171" }} className="py-2 font-bold">ACADEMY</Nav.Link>
              <Nav.Link href="/contact" style={{ color: "#002171" }} className="py-2 font-bold">CONTACT</Nav.Link>
              <Nav.Link href="/blog" style={{ color: "#002171" }} className="py-2 font-bold">BLOG</Nav.Link>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
