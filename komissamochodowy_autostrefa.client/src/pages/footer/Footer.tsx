import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <footer className="bg_color_navbar text-dark py-1 font-family: 'Nunito', sans-serif;">
            <Container fluid>
                <Row>
                    <Col>
                        <h5 className="text-center">AUTOSTREFA</h5>
                        <ul className="list-unstyled">
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> ul. Znana 10, 00-000 Warszawa
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> 700 800 900
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> autostrefa@gmail.com
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-center">MENU</h5>
                        <Row>
                            <Col>
                                <ul className="list-unstyled">
                                    <li><a href="/">Strona główna</a></li>
                                    <li><a href="/Samochody">Nasza oferta</a></li>
                                    <li><a href="/SkupAut">Skup aut</a></li>
                                    <li><a href="/Finansowanie">Finansowanie</a></li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li><a href="/Ubezpieczenie">Ubezpieczenie</a></li>
                                    <li><a href="/Blog">Blog</a></li>
                                    <li><a href="/Kontakt">Kontakt</a></li>
                                    <li><a href="/Logowanie">Logowanie</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h5 className="text-center">SOCIAL MEDIA</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>Facebook</li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a>Twitter</li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a>Instagram</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="custom-hr1 mb-0 mt-0" />
                <p className="text-center mb-0">&copy; 2024 AUTOSTREFA</p>
            </Container>
        </footer>
    );
}

export default Footer;