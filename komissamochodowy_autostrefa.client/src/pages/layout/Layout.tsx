import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Footer from '../footer/Footer.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export function Layout() {
    return (
        <div className="layout-wrapper">
            <div className="contact-bar">

                {/* PASEK KONTAKTU */}
                <Container>
                    <div className="contact-info">
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span>autostrefa@gmail.com</span>
                    </div>
                    <div className="contact-info">
                        <span><FontAwesomeIcon icon={faPhone} /></span>
                        <span>700 800 900</span>
                    </div>
                </Container>
            </div>

            {/* NAVBAR */}
            <Navbar expand="lg" className="bg_color_navbar">
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink to="/" className='d-block'>
                            <Image src="/image/logo.png" className="logo" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/" className="d-block bold-text">STRONA GŁÓWNA</Nav.Link>
                            <Nav.Link as={NavLink} to="/Samochody" className="d-block bold-text">NASZA OFERTA</Nav.Link>
                            <Nav.Link as={NavLink} to="/SkupAut" className="d-block bold-text">SKUP AUT</Nav.Link>
                            <NavDropdown className="bold-text" title="USŁUGI" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={NavLink} to="/Finansowanie" className="d-block">FINANSOWANIE</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/Ubezpieczenie" className="d-block">UBEZPIECZENIE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/Blog" className="d-block bold-text">BLOG</Nav.Link>
                            <Nav.Link as={NavLink} to="/Kontakt" className="d-block bold-text">KONTAKT</Nav.Link>
                            <Nav.Link as={NavLink} to="/Logowanie" className="d-block bold-text">LOGOWANIE</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="red-outline"
                                aria-label="Szukaj"
                            />
                            <Button variant="outline-danger" className="margin_left">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ZAWARTOŚĆ STRONY */}
            <div className="content">
                <Container>
                    <Outlet />
                </Container>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}