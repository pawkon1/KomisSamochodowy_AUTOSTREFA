import { useState } from 'react';
import { Container, Form, Alert, Carousel } from 'react-bootstrap';

export const SkupAut = () => {

    const [formData, setFormData] = useState({
        marka: '',
        model: '',
        dataProdukcji: '',
        przebieg: '',
        pojemnosc: '',
        paliwo: '',
        liczbaDrzwi: '',
        kolor: '',
        sugerowanaCena: '',
        imieNazwisko: '',
        miejscowosc: '',
        telefon: '',
        zgoda: false,
    });

    const [errors, setErrors] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.marka) newErrors.marka = 'Pole Marka jest wymagane';
        if (!formData.model) newErrors.model = 'Pole Model jest wymagane';
        if (!formData.dataProdukcji) {
            newErrors.dataProdukcji = 'Pole Data Produkcji jest wymagane';
        } else {
            const year = parseInt(formData.dataProdukcji, 10);
            if (!/^\d{4}$/.test(formData.dataProdukcji) || year < 1900 || year > new Date().getFullYear()) {
                newErrors.dataProdukcji = 'Niepoprawny format roku produkcji (np. 2024)';
            }
        }
        if (!formData.przebieg) newErrors.przebieg = 'Pole Przebieg jest wymagane';
        if (!formData.pojemnosc) newErrors.pojemnosc = 'Pole Pojemność jest wymagane';
        if (!formData.paliwo) newErrors.paliwo = 'Pole Paliwo jest wymagane';
        if (!formData.liczbaDrzwi) newErrors.liczbaDrzwi = 'Pole Liczba drzwi jest wymagane';
        if (!formData.sugerowanaCena) {
            newErrors.sugerowanaCena = 'Pole Sugerowana cena jest wymagane';
        } else {
            if (!/^\d+$/.test(formData.sugerowanaCena)) {
                newErrors.sugerowanaCena = 'Dozwolone są tylko cyfry';
            }
        }
        if (!formData.imieNazwisko) newErrors.imieNazwisko = 'Pole Imię i nazwisko jest wymagane';
        if (!formData.miejscowosc) newErrors.miejscowosc = 'Pole Miejscowość jest wymagane';
        if (!formData.telefon) {
            newErrors.telefon = 'Pole Telefon jest wymagane';
        } else {
            if (!/^\d{3}-\d{3}-\d{3}$/.test(formData.telefon)) {
                newErrors.telefon = 'Niepoprawny format telefonu (np. 123-456-789)';
            }
        }
        if (!formData.zgoda) {
            newErrors.zgoda = 'Wyrażenie zgody jest wymagane';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = validateForm();
        if (formIsValid) {
            // Wysyłanie formularza
            console.log('Formularz wysłany:', formData);
            setShowSuccessMessage(true);
            setFormData({
                marka: '',
                model: '',
                dataProdukcji: '',
                przebieg: '',
                pojemnosc: '',
                paliwo: '',
                liczbaDrzwi: '',
                kolor: '',
                sugerowanaCena: '',
                imieNazwisko: '',
                miejscowosc: '',
                telefon: '',
                zgoda: false,
            });
            setErrors({});
        } else {
            // Jeśli formularz nie jest poprawny, wyświetl błędy walidacji
            setShowSuccessMessage(false);
        }
    };

    return (
        <Container fluid className="app-container">

            <Carousel className="d-block w-100 mt-1 carousel">
                <Carousel.Item interval={3000}>
                    <img src="image/umowa.png"/>
                    <Carousel.Caption>
                        {/*<h3>Autostrefa</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="image/zgoda.png"/>
                    <Carousel.Caption>
                        {/*<h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="image/rece.png"/>
                    <Carousel.Caption>
                       {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="custom-card-container-head">
                <div className="custom-card-title-head">NASZA OFERTA SKUPU</div>
                <hr className="custom-hr1" />
                <div className="custom-card-text-head">
                    Jeśli zamieszkujesz Warszawe lub okolice, rozstanie z samochodem nie musi być dla Ciebie problemem. Oferowany przez AUTOSTREFE skup aut za gotówkę pozwala na sprzedaż dowolnego egzemplarza. Nie trać już czasu na poszukiwanie zdecydowanego nabywcy. Zgłoś się do nas!
                </div>
            </div>


            <div className="custom-card-container">

                <div className="custom-card">
                    <div className="custom-card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                            <path d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3" />
                        </svg>
                        <div className="custom-card-title">SZYBKA TRANSAKCJA</div>
                        <hr className="card-divider" />
                        <div className="custom-card-text">
                            Skup samochodów używanych odbywa się u nas bardzo szybko. Zależy Ci na czasie? Dobrze trafiłeś!
                        </div>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="custom-card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg" viewBox="0 0 16 16">
                            <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                        </svg>
                        <div className="custom-card-title">WSZYSTKIE MARKI</div>
                        <hr className="card-divider" />
                        <div className="custom-card-text">
                            Nie ma znaczenia, jakiej marki jest samochód, który chcesz sprzedać. Nasz skup aut za gotówkę przyjmuje wszystkie.
                        </div>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="custom-card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg" viewBox="0 0 16 16">
                            <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" />
                            <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                        </svg>
                        <div className="custom-card-title">DOWOLNY STAN TECHNICZNY</div>
                        <hr className="card-divider" />
                        <div className="custom-card-text">
                            Zwykle trudno sprzedać egzemplarz zużyty lub uszkodzony. Skup aut w Warszawie AUTOSTREFA to najlepszy sposób na to, by korzystnie oddać pojazd.
                        </div>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="custom-card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg" viewBox="0 0 16 16">
                            <path d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                        </svg>
                        <div className="custom-card-title">RZETELNA WYCENA</div>
                        <hr className="card-divider" />
                        <div className="custom-card-text">
                            Zależy nam na zadowoleniu wszystkich Klientów wybierających nasz skup aut używanych. Wycena oparta jest więc o wnikliwe badanie stanu technicznego.
                        </div>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="custom-card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg>
                        <div className="custom-card-title">POŚREDNICTWO W SPRZEDAŻY</div>
                        <hr className="card-divider" />
                        <div className="custom-card-text">
                            Pozostawiając auto w naszym komisie otrzymasz kompleksowa pomoc w sprzedaży pojazdu w zamian za korzystną prowizje.
                        </div>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="custom-card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg" viewBox="0 0 16 16">
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                        </svg>
                        <div className="custom-card-title">NAJWYŻSZY POZIOM OBSŁUGI</div>
                        <hr className="card-divider" />
                        <div className="custom-card-text">
                            Działamy w branży motoryzacyjnej od wielu lat. O jakości naszej pracy przekonało sie wielu Klientów. Wybierz nasz skup aut i dołącz do nich!
                        </div>
                    </div>
                </div>

            </div>

            <div className="form-container">
                <h2 className="form-head">WYPEŁNIJ FORMULARZ SKUPU SAMOCHODU</h2>
                {showSuccessMessage && (
                    <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
                        Formularz został pomyślnie wysłany!
                    </Alert>
                )}
                <Form noValidate onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <Form.Group controlId="field1" className="form-item">
                                <Form.Label>Marka</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="marka"
                                    value={formData.marka}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.marka}
                                    placeholder="np. Opel"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.marka}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field2" className="form-item">
                                <Form.Label>Model</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.model}
                                    placeholder="np. Astra"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.model}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field3" className="form-item">
                                <Form.Label>Data produkcji</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dataProdukcji"
                                    value={formData.dataProdukcji}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.dataProdukcji}
                                    placeholder="np. 2024"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dataProdukcji}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <Form.Group controlId="field4" className="form-item">
                                <Form.Label>Przebieg</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="przebieg"
                                    value={formData.przebieg}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.przebieg}
                                >
                                    <option value="">Wybierz</option>
                                    <option value="0-50tys">0-50 tys. km</option>
                                    <option value="51-100tys">51-100 tys. km</option>
                                    <option value="101-150tys">101-150 tys. km</option>
                                    <option value="151-200tys">151-200 tys. km</option>
                                    <option value="201-250tys">201-250 tys. km</option>
                                    <option value="251-300tys">251-300 tys. km</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.przebieg}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field5" className="form-item">
                                <Form.Label>Pojemność</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="pojemnosc"
                                    value={formData.pojemnosc}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.pojemnosc}
                                >
                                    <option value="">Wybierz</option>
                                    <option value="do 1.0">do 1.0</option>
                                    <option value="1.0-1.5">1.0-1.5</option>
                                    <option value="1.6-2.0">1.6-2.0</option>
                                    <option value="2.1-3.0">2.1-3.0</option>
                                    <option value="powyżej 3.0">powyżej 3.0</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.pojemnosc}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field6" className="form-item">
                                <Form.Label>Paliwo</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="paliwo"
                                    value={formData.paliwo}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.paliwo}
                                >
                                    <option value="">Wybierz</option>
                                    <option value="benzyna">Benzyna</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="benzyna + LPG">Benzyna + LPG</option>
                                    <option value="benzyna + CNG">Benzyna + CNG</option>
                                    <option value="hybryda">Hybryda</option>
                                    <option value="elektryczny">Elektryczny</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.paliwo}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <Form.Group controlId="field7" className="form-item">
                                <Form.Label>Liczba drzwi</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="liczbaDrzwi"
                                    value={formData.liczbaDrzwi}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.liczbaDrzwi}
                                >
                                    <option value="">Wybierz</option>
                                    <option value="2/3">2/3</option>
                                    <option value="4/5">4/5</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.liczbaDrzwi}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field8" className="form-item">
                                <Form.Label>Kolor</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="kolor"
                                    value={formData.kolor}
                                    onChange={handleInputChange}
                                    placeholder="np. srebrny"
                                />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field9" className="form-item">
                                <Form.Label>Sugerowana cena</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sugerowanaCena"
                                    value={formData.sugerowanaCena}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.sugerowanaCena}
                                    placeholder="np. 10 000"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.sugerowanaCena}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <Form.Group controlId="field10" className="form-item">
                                <Form.Label>Imię i nazwisko</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imieNazwisko"
                                    value={formData.imieNazwisko}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.imieNazwisko}
                                    placeholder="np. Jan Kowalski"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.imieNazwisko}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field11" className="form-item">
                                <Form.Label>Miejscowość</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="miejscowosc"
                                    value={formData.miejscowosc}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.miejscowosc}
                                    placeholder="np. Warszawa"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.miejscowosc}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="field12" className="form-item">
                                <Form.Label>Telefon</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="telefon"
                                    value={formData.telefon}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.telefon}
                                    placeholder="np. 123-456-789"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.telefon}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="form-row checkbox-container">
                        <input
                            type="checkbox"
                            id="zgoda"
                            name="zgoda"
                            checked={formData.zgoda}
                            onChange={handleInputChange}
                            className={errors.zgoda ? 'is-invalid' : ''}
                        />
                        {errors.zgoda && (
                            <div className="invalid-feedback">
                                {errors.zgoda}
                            </div>
                        )}
                        <label htmlFor="zgoda">
                            Zgadzam się na przetwarzanie moich danych osobowych, podanych w formularzu kontaktowym w celu realizacji obsługi przesłanego zapytania. Moje dane przekazuję dobrowolnie, gdyż mam świadomość, że jest to konieczne do przetworzenia zapytania i udzielenia mi wszelkich informacji. Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dn. 27.04.2016 w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).
                        </label>
                    </div>
                    <div className="form-item full-width">
                        <button type="submit" className="submit-button">
                            Wyślij wycenę
                        </button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}
