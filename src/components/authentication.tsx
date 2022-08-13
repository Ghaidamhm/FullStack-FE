import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logoutUserAsync } from "../app/redux/user/userSlice";
import logoHeader from "../pages/code.png";



function Authentication(props:any) {
    const { auth, user, ErrorMessage } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const logout = ()=>{
        dispatch(logoutUserAsync());
        localStorage.clear();
    }
    return (
       
        <Navbar className="header header-landing" expand="lg">
        <Container>
        <Navbar.Brand href="/">
        <img src={logoHeader} height={50} width={60} />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Navbar.Collapse className="justify-content-end">
        <Nav>
        {auth? ( <Nav.Link onClick={()=>props.setProfileOpen(true)}>Profile</Nav.Link>):null}
            <Nav.Link href="/my/packages">My Packages</Nav.Link>
            <Nav.Link onClick={()=> props.setOpenPackage(true)}>Create Packages</Nav.Link>
         
            
                {auth? ( <Nav.Link onClick={logout}>logout </Nav.Link>):
            ( <> <Nav.Link onClick={()=> props.setLoginOpen(true)}>Login</Nav.Link></>)
        }
       
            </Nav>
            
       <div className="pull-right">
            {user?.name}
       </div>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}


export default Authentication;