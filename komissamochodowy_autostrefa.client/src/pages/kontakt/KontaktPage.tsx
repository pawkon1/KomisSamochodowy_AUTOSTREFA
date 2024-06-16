import { useState } from 'react';
import { Container, Form, Alert } from 'react-bootstrap';

export const Kontakt = () => {

    const [formData, setFormData] = useState({
        imie: '',
        nazwisko: '',
        telefon: '',
        wiadomosc: '',
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
        if (!formData.imie) newErrors.imie = 'Pole Imię jest wymagane';
        if (!formData.nazwisko) newErrors.nazwisko = 'Pole Nazwisko jest wymagane';
        if (!formData.telefon) {
            newErrors.telefon = 'Pole Telefon jest wymagane';
        } else {
            if (!/^\d{3}\d{3}\d{3}$/.test(formData.telefon)) {
                newErrors.telefon = 'Niepoprawny format telefonu (np. 123456789)';
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
                imie: '',
                nazwisko: '',
                telefon: '',
                wiadomosc: '',
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
            <div className="custom-card-container-head">
                <div className="custom-card-title-head">SKONTAKTUJ SIĘ Z NAMI!</div>
                <hr className="custom-hr1" />
                <div className="custom-card-text-head">
                    Dziękujemy za zainteresowanie naszą firmą! Jeśli masz jakiekolwiek pytania, sugestie lub potrzebujesz pomocy, prosimy o kontakt. Nasz zespół wsparcia jest gotowy, aby Ci pomóc i odpowiedzieć na wszelkie pytania. Czekamy na Twoją wiadomość!</div>
            </div>


            <div className="custom-card-container-kontakt">

                <div className="custom-card-kontakt">
                    <div className="custom-card-body-kontakt">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg-kontakt" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <div className="custom-card-title-kontakt"><a href="#">ADRES</a></div>
                        <hr className="card-divider" />
                        <div className="custom-card-text-kontakt">
                            <a href="#">ul. Znana 10, 00-000 Warszawa</a></div>
                    </div>
                </div>


                <div className="custom-card-kontakt">
                    <div className="custom-card-body-kontakt">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg-kontakt" viewBox="0 0 16 16">
                            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <div className="custom-card-title-kontakt"><a href="#">TELEFON</a></div>
                        <hr className="card-divider" />
                        <div className="custom-card-text-kontakt">
                            <a href="#">700 800 900</a></div>
                    </div>
                </div>

                <div className="custom-card-kontakt form-expand">
                    <div className="custom-card-body-kontakt">
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-card-svg-kontakt" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <div className="custom-card-title-kontakt"><a href="#">EMAIL</a></div>
                        <hr className="card-divider" />
                        <div className="custom-card-text-kontakt">
                            <a href="#">autostrefa@gmail.com</a></div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="form-container">
                <div>
                    {showSuccessMessage && (
                        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
                            Formularz został pomyślnie wysłany!
                        </Alert>
                    )}
                    <Form noValidate onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col">
                                <Form.Group controlId="field10" className="form-item">
                                    <Form.Label>Imię</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="imie"
                                        value={formData.imie}
                                        onChange={handleInputChange}
                                        isInvalid={!!errors.imie}
                                        placeholder="np. Jan"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.imie}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group controlId="field11" className="form-item">
                                    <Form.Label>Nazwisko</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nazwisko"
                                        value={formData.nazwisko}
                                        onChange={handleInputChange}
                                        isInvalid={!!errors.nazwisko}
                                        placeholder="np. Nowak"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nazwisko}
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
                                        placeholder="np. 123456789"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.telefon}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <Form.Group controlId="field13" className="form-item">
                                    <Form.Label>Treść wiadomości (opcjonalnie)</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="wiadomosc"
                                        value={formData.wiadomosc}
                                        onChange={handleInputChange}
                                        placeholder="Wpisz treść wiadomości..."
                                    />
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
                                Wyślij
                            </button>
                        </div>
                    </Form>
                </div>
            </div>


            <div className="side-container">
                <div className="form-container-godziny">
                    <div className="form-item-dni">
                        <label>GODZINY OTWARCIA</label>
                        <hr className="card-divider-dni" />
                        <ul>poniedziałek</ul>
                        <ul>wtorek</ul>
                        <ul>środa</ul>
                        <ul>czwartek</ul>
                        <ul>piątek</ul>
                        <ul>sobota</ul>
                        <ul>niedziela</ul>
                    </div>
                    <div className="form-item-godziny">
                        <ul>8:00 - 18:00</ul>
                        <ul>8:00 - 18:00</ul>
                        <ul>8:00 - 18:00</ul>
                        <ul>8:00 - 18:00</ul>
                        <ul>8:00 - 18:00</ul>
                        <ul>8:00 - 13:00</ul>
                        <ul>nieczynne</ul>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.793597207952!2d20.940940315821097!3d52.23285527975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccb26e13bdb1%3A0x84c8c7fedaaf0219!2sZnana%2C%20Warszawa%2C%20Polska!5e0!3m2!1spl!2sus!4v1652116485185!5m2!1spl!2sus"
      
                        alt="Mapa Znana Street, Warsaw"
                    ></iframe>
                </div>
            </div>
        </Container>
    )
}



