import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar as BootstrapNavbar, Nav, Offcanvas } from 'react-bootstrap';

const Navbar = ({ cartCount }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products/eyeglasses', label: 'Eyeglasses' },
    { path: '/products/sunglasses', label: 'Sunglasses' },
    { path: '/products/bluelight', label: 'Blue Light' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <BootstrapNavbar expand="lg" className="bg-white sticky-top shadow-sm" style={{ padding: '1rem 0' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold" style={{ fontSize: '1.8rem', color: '#1a1a1a', letterSpacing: '2px' }}>
          VISIONA
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" className="border-0" />

        <BootstrapNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold" style={{ letterSpacing: '2px' }}>
              VISIONA
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  onClick={handleClose}
                  className="mx-3 text-decoration-none"
                  style={{
                    color: location.pathname === link.path ? '#1a1a1a' : '#666',
                    fontWeight: location.pathname === link.path ? '600' : '400',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center gap-4">
              <Link to="/search" className="text-decoration-none" style={{ color: '#1a1a1a' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </Link>
              <Link to="/wishlist" className="text-decoration-none position-relative" style={{ color: '#1a1a1a' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
              </Link>
              <Link to="/cart" className="text-decoration-none position-relative" style={{ color: '#1a1a1a' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      backgroundColor: '#1a1a1a',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
