import { useState, useEffect } from 'react';
import './App.css';
import { Container, Button, Card, Carousel, Modal, Form } from 'react-bootstrap';

const IMIONA = ["Jan", "Anna", "Piotr", "Maria", "Andrzej", "Krystyna", "Wojciech", "Barbara", "Krzysztof", "Teresa", "Joanna", "Paweł", "Aleksandra"];

function App() {

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    //const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
      
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowModal(false);
            setShowSuccessMessage(false);
            setEmail('');
        }, 3000);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);



    const today = new Date();
    const auctionEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59); // Ustawienie aktualnej daty

    const komentarze = [ // Przykładowe komentarze
        "Bardzo polecam! Profesjonalna obsługa.",
        "Zakup samochodu przebiegł sprawnie. Bardzo zadowolony!",
        "Świetny wybór samochodów w atrakcyjnych cenach.",
        "Bardzo miła obsługa klienta. Polecam!",
    ];

    return (
        <div className="app-container"> {/* BANER + NAPISY */}

            <Carousel className="d-block w-100 mt-1 carousel">
                <Carousel.Item interval={2000}>
                    <img src="image/wnetrze.png" />
                    <Carousel.Caption>
                        <h3 className="main-text">Komis samochodowy AUTOSTREFA</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="image/kontakt.png" />
                    <Carousel.Caption>
                        <h3 className="contact-text">ZADZWOŃ! 700 800 900</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src="image/kluczyki.png" />
                    <Carousel.Caption>
                        <h3 className="contact-text-end">Twój klucz do doskonałego zakupu! Znajdź idealny samochód z nami!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="auction-info">OSTATNIE SZTUKI !!!</div> {/* KARTY SAMOCHODÓW */}
            <Container fluid className="main-container">
                <div className="d-flex justify-content-center flex-wrap ">
                    <CardComponent
                        title="Skoda Octavia 3"
                        engine="2,0 diesel"
                        year="2016 rok"
                        wersja="Active"
                        cena="45 000,00 PLN"
                        image="image/octavia.png"
                        auctionEnd={auctionEnd}
                    />
                    <CardComponent
                        title="Ford Focus mk3"
                        engine="1,5 TDCI"
                        year="2016 rok"
                        wersja="Titanium"
                        cena="35 000,00 PLN"
                        image="image/ford.png"
                        auctionEnd={auctionEnd}
                    />
                    <CardComponent
                        title="Volkswagen Golf VII"
                        engine="1,8 TSI"
                        year="2018 rok"
                        wersja="Highline"
                        cena="50 000,00 PLN"
                        image="image/golf.png"
                        auctionEnd={auctionEnd}
                    />
                    <CardComponent
                        title="Ford Mondeo mk3"
                        engine="2,0 TDCI"
                        year="2004 rok"
                        wersja="Ghia"
                        cena="12 000,00 PLN"
                        image="image/mondeo.png"
                        auctionEnd={auctionEnd}
                    />
                </div>
            </Container>
            <Komentarze komentarze={komentarze} />

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>NIE PRZEGAP ŻADNEJ OKAZJI!!! </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="custom-modal-container">
                        <Form onSubmit={handleSubscribe} className="form-container">
                            <Form.Group controlId="formBasicEmail" className="form-group">
                                <Form.Label className="form-label">Dołącz do nas, aby otrzymywać najlepsze oferty bezposrednio na swoja skrzynę pocztową.</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Wprowadź adres email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="form-control"
                                />
                            </Form.Group>
                            <div className="button-container">
                                <Button variant="danger" type="submit">
                                    Zapisz się
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* wiadomość sukces po udanym zapisie do newslettera */}
            <Modal show={showSuccessMessage} onHide={() => setShowSuccessMessage(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Zapisano do newslettera</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Twój adres email został dodany do newslettera. Dziękujemy!
                </Modal.Body>
            </Modal>
        </div>
    );
}
// Funkcja do wystawiania danych w kartach
function CardComponent({ title, engine, year, wersja, cena, image, auctionEnd }) {
    const isAuctionEndingToday = isToday(auctionEnd);
    const auctionInfo = isAuctionEndingToday ? "Aukcja kończy się dzisiaj" : "";

    return (
        <Card style={{ width: '18rem', margin: '13px' }} className="my-card">
            {isAuctionEndingToday && <div className="auction-ending" style={{ color: '#dd2a2a' }}>{auctionInfo}</div>}
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Silnik: {engine}<br />
                    Rok produkcji: {year}<br />
                    Wersja: {wersja}<br />
                    Cena: {cena}
                </Card.Text>
                <Button variant="outline-danger">Zobacz...</Button>
            </Card.Body>
        </Card>
    );
}
// Funkcja do wystawiania komentarzy
function Komentarze({ komentarze }) {
    return (
        <Container fluid>
            <div className="opinie-wrapper">
                <div className="custom-card-title">
                    <h2>OPINIE NASZYCH KLIENTÓW</h2>
                    <hr className="custom-hr1" />
                </div>
                <div className="komentarze-container">
                    {komentarze.map((komentarz, index) => (
                        <div key={index} className="komentarz">
                            <div className="klient-info">
                                <div className="klient-avatar">
                                    <div className="klient-imie">{losoweImie()}</div>
                                </div>
                                <div className="klient-opinia">
                                    <div className="gwiazdki">*****</div>
                                    <div className="opinia-tekst">{komentarz}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

// Funkcja zwracająca losowe imię z listy IMIONA
function losoweImie() {
    return IMIONA[Math.floor(Math.random() * IMIONA.length)];
}


// Funkcja sprawdzająca, czy dana data jest dzisiaj
function isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

export default App;