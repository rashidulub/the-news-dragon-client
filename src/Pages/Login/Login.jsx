import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIN}= useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/category/0'


    const handleSingIN = event=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIN(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <Container className='w-25 mx-auto mt-5'>
            <h2>Login Please</h2>
            <Form onSubmit={handleSingIN}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-2'>Don't Have An Account? <Link className='text-danger text-decoration-none' to='/register'>Register</Link></p>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;