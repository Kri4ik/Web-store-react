import React, { useContext }  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite"
/* observer to check of changing values */
const NavBar = observer( ()=>{
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>Buy device</NavLink>
                {
                /*ternar operator*/
                user.isAuth ?
                    <Nav className="ml-auto" style={{color:"white"}}>
                        <Button variant={'outline-light'}>Admin Panel</Button>
                        <Button variant={'outline-light'} className="ml-4">Sign in</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:"white"}}>
                        <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Autorization</Button>
                    </Nav>
                }
            </Container>
      </Navbar>
    );
});

export default NavBar;