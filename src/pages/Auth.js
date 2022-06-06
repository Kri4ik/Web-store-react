import React from 'react';
import { Container, Form,  } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { NavLink, useLocation, } from 'react-router-dom';

const Auth =() => {
    const Location = useLocation()
    const isLogin = Location.pathname === LOGIN_ROUTE

    return (
    <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 600}} className = "p-5">
            <h2 className='m-auto'> {isLogin ? 'Authorization' : 'Registration'}</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-3'
                    placeholder='Input your Email'
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Input your password'
                />
                
            <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ?               
                <div>
                    No Account? <NavLink to = {REGISTRATION_ROUTE}>Registration</NavLink>
                </div>
                :
                <div>
                    Have Account? <NavLink to = {LOGIN_ROUTE}>Sign in</NavLink>
                </div>
            }
                <Button 
                    variant= {"outline-dark"}>
                       {isLogin ? 'Sign in' : 'Registration'}
                </Button>
            </Row>

            </Form>       
        </Card>
    </Container>
    );
};

export default Auth;