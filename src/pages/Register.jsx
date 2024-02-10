import React,  {useState}from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import registerImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.jpg'

import { validateRegistration, saveCredentialsToLocalStorage } from "../utils/auth"

const Register = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setError((prev) => ({ ...prev, [e.target.id]: '' }));
    };

    const handleClick = (e) => {
        e.preventDefault();

        const validationErrors = validateRegistration(credentials.username, credentials.email, credentials.password);

        if (validationErrors.username || validationErrors.email || validationErrors.password) {
            setError(validationErrors);
            return;
        }
        saveCredentialsToLocalStorage(credentials);

        navigate('/login');
    };
    return (

    <section>

    <Container>
        <Row>
            <Col lg='9' className="m-auto">
                <div className="login__container d-flex justify-content-between">
                    <div className= "login__img">
                        <img src={registerImg} alt="" />
                   </div>
                   <div className="login__form">
                    <div className="user">
                        <img src =  {userIcon} alt="" />
                         </div>
                         <h2>Register</h2>
                         <Form onSubmit={handleClick} noValidate>
                                    <FormGroup>
                                        <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                                        {error.username && <p className="error-message">{error.username}</p>}
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                                        {error.email && <p className="error-message">{error.email}</p>}
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                        {error.password && <p className="error-message">{error.password}</p>}
                                    </FormGroup>
                                    <button className="btn secondary__btn auth__btn" type="submit">Create Account</button>
                                    <p> Already have any account? <Link to='/login'>Login</Link> </p>
                         </Form>

                   </div>


                </div>
            </Col>
        </Row>
    </Container>
  </section>
    );
    
}

export default Register;