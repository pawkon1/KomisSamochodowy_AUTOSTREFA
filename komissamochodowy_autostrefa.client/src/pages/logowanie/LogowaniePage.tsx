import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const Logowanie = () => {

    const [activeTab, setActiveTab] = useState('login');

    const renderLoginForm = () => (
        <div className="custom-logowanie-tab-content">
            <Form.Group controlId="formLoginEmail" className="form-item-logowanie">
                <Form.Label>Adres email</Form.Label>
                <Form.Control type="email" placeholder="Wprowadź adres email" />
            </Form.Group>
            <Form.Group controlId="formLoginPassword" className="form-item-logowanie">
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" placeholder="Wprowadź hasło" />
            </Form.Group>
            <Button className="submit-button-logowanie">Zaloguj się</Button>
        </div>
    );

    const renderSignupForm = () => (
        <div className="custom-logowanie-tab-content">
            <Form.Group controlId="formSignupFirstName" className="form-item-logowanie">
                <Form.Label>Imię</Form.Label>
                <Form.Control type="text" placeholder="Wprowadź imię" />
            </Form.Group>
            <Form.Group controlId="formSignupLastName" className="form-item-logowanie">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control type="text" placeholder="Wprowadź nazwisko" />
            </Form.Group>
            <Form.Group controlId="formSignupPhone" className="form-item-logowanie">
                <Form.Label>Numer telefonu</Form.Label>
                <Form.Control type="text" placeholder="Wprowadź numer telefonu" />
            </Form.Group>
            <Form.Group controlId="formSignupEmail" className="form-item-logowanie">
                <Form.Label>Adres email</Form.Label>
                <Form.Control type="email" placeholder="Wprowadź adres email" />
            </Form.Group>
            <Form.Group controlId="formSignupConfirmEmail" className="form-item-logowanie">
                <Form.Label>Potwierdź adres email</Form.Label>
                <Form.Control type="email" placeholder="Potwierdź adres email" />
            </Form.Group>
            <Form.Group controlId="formSignupPassword" className="form-item-logowanie">
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" placeholder="Wprowadź hasło" />
            </Form.Group>
            <Form.Group controlId="formSignupConfirmPassword" className="form-item-logowanie">
                <Form.Label>Potwierdź hasło</Form.Label>
                <Form.Control type="password" placeholder="Potwierdź hasło" />
            </Form.Group>
            <Button className="submit-button-logowanie">Załóż konto</Button>
        </div>
    );

    return (

        <Container>
            <div className="custom-card-container-head">
                <div className="custom-card-title-head">ZAŁÓŻ KONTO I SKORZYSTAJ Z DODATKOWYCH FUNKCJI!</div>
                <hr className="custom-hr1" />
                <div className="custom-card-text-head">
                    Dołącz do naszej społeczności już teraz! Zarejestruj się, aby otrzymać dostęp do ekskluzywnych ofert, zapisanych wyszukiwań oraz szybkiego dostępu do nowych przyjaznych samochodów.</div>
            </div>

            <div className="custom-logowanie-tab-card">
                <div className="custom-logowanie-tab-header">
                    <button
                        className={activeTab === 'login' ? 'active' : ''}
                        onClick={() => setActiveTab('login')}
                    >
                        Zaloguj się
                    </button>
                    <button
                        className={activeTab === 'signup' ? 'active' : ''}
                        onClick={() => setActiveTab('signup')}
                    >
                        Załóż konto
                    </button>
                </div>
                {activeTab === 'login' ? renderLoginForm() : renderSignupForm()}
            </div>
        </Container>
    )
}