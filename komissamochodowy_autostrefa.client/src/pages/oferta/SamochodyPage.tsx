import { Container, Card, Button } from 'react-bootstrap';

const years = Array.from({ length: 35 }, (_, i) => 1990 + i); // Lata od 1990 do 2020

const cardsData = [
    {
        title: 'Skoda Octavia 3',
        engine: '2,0 diesel',
        year: '2016 rok',
        wersja: 'Active',
        cena: '45 000,00 PLN',
        image: 'image/octavia.png',
    },
    {
        title: 'Ford Focus mk3',
        engine: '1,5 TDCI',
        year: '2016 rok',
        wersja: 'Titanium',
        cena: '35 000,00 PLN',
        image: 'image/ford.png',
    },
    {
        title: 'Volkswagen Golf VII',
        engine: '1,8 TSI',
        year: '2018 rok',
        wersja: 'Highline',
        cena: '50 000,00 PLN',
        image: 'image/golf.png',
    },
    {
        title: 'Ford Mondeo mk3',
        engine: '2,0 TDCI',
        year: '2004 rok',
        wersja: 'Ghia',
        cena: '12 000,00 PLN',
        image: 'image/mondeo.png',
    },
    {
        title: 'Opel Astra J',
        engine: '1,6 benzyna',
        year: '2015 rok',
        wersja: 'Cosmo',
        cena: '32 000,00 PLN',
        image: 'image/astra.png',
    },
    {
        title: 'BMW 3 E46',
        engine: '2,0 diesel',
        year: '2002 rok',
        wersja: 'Touring',
        cena: '20 000,00 PLN',
        image: 'image/bmw.png',
    },
    {
        title: 'Toyota Corolla E12',
        engine: '1,4 benzyna',
        year: '2005 rok',
        wersja: 'Sedan',
        cena: '15 000,00 PLN',
        image: 'image/corolla.png',
    },
    {
        title: 'Honda Civic IX',
        engine: '1,8 i-VTEC',
        year: '2012 rok',
        wersja: 'Sport',
        cena: '28 000,00 PLN',
        image: 'image/civic.png',
    },
    {
        title: 'Peugeot 308 II',
        engine: '1,6 BlueHDi',
        year: '2017 rok',
        wersja: 'Allure',
        cena: '36 000,00 PLN',
        image: 'image/peugeot.png',
    },
    {
        title: 'Renault Megane IV',
        engine: '1,5 dCi',
        year: '2019 rok',
        wersja: 'Intens',
        cena: '42 000,00 PLN',
        image: 'image/megane.png',
    },
    {
        title: 'Mercedes-Benz C W205',
        engine: '2,0 diesel',
        year: '2015 rok',
        wersja: 'Elegance',
        cena: '55 000,00 PLN',
        image: 'image/mercedes.png',
    },
    {
        title: 'Nissan Qashqai II',
        engine: '1,5 dCi',
        year: '2016 rok',
        wersja: 'Tekna',
        cena: '40 000,00 PLN',
        image: 'image/qashqai.png',
    },
];
const CardComponent = ({ title, engine, year, wersja, cena, image }) => (
    <Card className="card-item-sam" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <strong>Silnik:</strong> {engine} <br />
                <strong>Rok produkcji:</strong> {year} <br />
                <strong>Wersja:</strong> {wersja} <br />
                <strong>Cena:</strong> {cena} <br />
            </Card.Text>
            <Button variant="outline-danger">Zobacz...</Button>
        </Card.Body>
    </Card>
);


export const Samochody = () => {

    return (
        <Container fluid className="app-container col-lg-3 col-md-4 col-sm-6">
            <div className="form-container-sam">
                <div className="form-head-sam">
                    <h2>WYSZUKAJ SWÓJ SAMOCHÓD</h2>
                    <hr className="custom-hr1" />
                </div>
                <div className="form-item-sam">
                    <label htmlFor="make">Marka</label>
                    <select id="make" className="custom-input-sam">
                        <option value="">Wybierz markę</option>
                        <option value="audi">Audi</option>
                        <option value="bmw">BMW</option>
                        <option value="opel">Opel</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="ford">Ford</option>
                        <option value="skoda">Skoda</option>
                        <option value="renault">Renault</option>
                        <option value="peugeot">Peugeot</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="model">Model</label>
                    <input type="text" id="model" className="custom-input-sam" placeholder="Wpisz model" />
                </div>
                <div className="form-item-sam">
                    <label htmlFor="year-from">Rok produkcji od</label>
                    <select id="year-from" className="custom-input-sam">
                        <option value="">Wybierz rok</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="year-to">Rok produkcji do</label>
                    <select id="year-to" className="custom-input-sam">
                        <option value="">Wybierz rok</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="make">Cena od</label>
                    <select id="make" className="custom-input-sam">
                        <option value="">Cena od</option>
                        <option value="cena1">10 000zł</option>
                        <option value="cena2">20 000zł</option>
                        <option value="cena3">30 000zł</option>
                        <option value="cena4">40 000zł</option>
                        <option value="cena5">50 000zł</option>
                        <option value="cena6">60 000zł</option>
                        <option value="cena7">70 000zł</option>
                        <option value="cena8">80 000zł</option>
                        <option value="cena8">90 000zł</option>
                        <option value="cena8">100 000zł</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="make">Cena do</label>
                    <select id="make" className="custom-input-sam">
                        <option value="">Cena od</option>
                        <option value="cena1">10 000zł</option>
                        <option value="cena2">20 000zł</option>
                        <option value="cena3">30 000zł</option>
                        <option value="cena4">40 000zł</option>
                        <option value="cena5">50 000zł</option>
                        <option value="cena6">60 000zł</option>
                        <option value="cena7">70 000zł</option>
                        <option value="cena8">80 000zł</option>
                        <option value="cena8">90 000zł</option>
                        <option value="cena8">100 000zł</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="make">Przebieg od</label>
                    <select id="make" className="custom-input-sam">
                        <option value="">Przebied od</option>
                        <option value="przebieg10">10 000km</option>
                        <option value="przebieg25">25 000km</option>
                        <option value="przebieg50">50 000km</option>
                        <option value="przebieg75">75 000km</option>
                        <option value="przebieg100">100 000km</option>
                        <option value="przebieg125">125 000km</option>
                        <option value="przebieg150">150 000km</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="make">Przebieg do</label>
                    <select id="make" className="custom-input-sam">
                        <option value="">Przebieg do</option>
                        <option value="przebieg10">10 000km</option>
                        <option value="przebieg25">25 000km</option>
                        <option value="przebieg50">50 000km</option>
                        <option value="przebieg75">75 000km</option>
                        <option value="przebieg100">100 000km</option>
                        <option value="przebieg125">125 000km</option>
                        <option value="przebieg150">150 000km</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="fuel">Rodzaj paliwa</label>
                    <select id="fuel" className="custom-input-sam">
                        <option value="">Wybierz rodzaj paliwa</option>
                        <option value="benzyna">Benzyna</option>
                        <option value="diesel">Diesel</option>
                        <option value="benzyna + LPG">Benzyna + LPG</option>
                        <option value="benzyna + CNG">Benzyna + CNG</option>
                        <option value="hybryda">Hybryda</option>
                        <option value="elektryczny">Elektryczny</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="transmission">Skrzynia biegów</label>
                    <select id="transmission" className="custom-input-sam">
                        <option value="">Wybierz skrzynię biegów</option>
                        <option value="manualna">Manualna</option>
                        <option value="automatyczna">Automatyczna</option>
                    </select>
                </div>
                <div className="form-item-sam">
                    <label htmlFor="color">Kolor</label>
                    <input type="text" id="color" className="custom-input-sam" placeholder="Wpisz kolor" />
                </div>
                <div className="form-item-sam">
                    <label htmlFor="doors">Liczba drzwi</label>
                    <select id="make" className="custom-input-sam">
                        <option value="2/3">2/3</option>
                        <option value="4/5">4/5</option>
                    </select>
                </div>
                <div className="form-item-sam full-width">
                    <button type="submit" className="submit-button-sam">Wyszukaj</button>
                </div>
            </div>

            <div className="custom-card-container">
                {cardsData.map((card, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                        <CardComponent {...card} />
                    </div>
                ))}
            </div>
        </Container>
    )
}
