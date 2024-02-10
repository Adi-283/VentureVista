import React,  {useState}from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { validateLogin, saveCredentialsToLocalStorage } from "../utils/auth";
import '../styles/login.css';
import loginImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.jpg'


const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setError('');
    };

    const handleClick = (e) => {
        e.preventDefault();
    
        const validationErrors = validateLogin(credentials.email, credentials.password);
    
        if (validationErrors.email || validationErrors.password) {
            setError(validationErrors);
            return;
        }
    
        // Check login logic here
        const storedCredentials = JSON.parse(localStorage.getItem('user'));
    
        console.log("Entered Credentials:", credentials);
        console.log("Stored Credentials:", storedCredentials);
    
        if (
            storedCredentials &&
            storedCredentials.email === credentials.email &&
            storedCredentials.password === credentials.password
        ) {
            
            saveCredentialsToLocalStorage(credentials);
    
            // Redirect to the home page using navigate
            navigate('/');
        } else {
            setError({ email: 'Invalid email', password: 'Invalid password' });
        }
    };   return (

    <section>

    <Container>
        <Row>
            <Col lg='9' className="m-auto">
                <div className="login__container d-flex justify-content-between">
                    <div className= "login__img">
                        <img src={loginImg} alt="" />
                   </div>
                   <div className="login__form">
                    <div className="user">
                        <img src =  {userIcon} alt="" />
                         </div>
                         <h2>Login</h2>
                         <Form>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                                        {error.email && <p className="error-message">{error.email}</p>}
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                        {error.password && <p className="error-message">{error.password}</p>}
                                    </FormGroup>
                                    <button className="btn secondary__btn auth__btn" type="submit" onClick={handleClick}>Login </button>
                                    <p> Don't have any account? <Link to='/register'>create</Link> </p>
                         </Form>

                   </div>


                </div>
            </Col>
        </Row>
    </Container>
  </section>
    );
    
}

export default Login;