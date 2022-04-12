import React from 'react';
import  { Navbar,Container,Nav }  from 'react-bootstrap';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from 'react-router-dom';
import { Shop } from '../shop/shop';
import { AppCount } from '../counter/counter';
import { Details } from '../details/details';


export const Appheader = () => {
   
    return (
        
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/">
                                <Nav.Link href="home">Home</Nav.Link>  
                            </Link>
                            <Link to="/shop">
                                <Nav.Link href="/shop">Shop</Nav.Link>  
                            </Link>
                            <Link to="/counter">
                                <Nav.Link href="/counter">
                                    Counter
                                </Nav.Link>  
                            </Link>
                            
                            
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path='/' element={< AppCount />}></Route> 
                    <Route exact path='/shop' element={< Shop />}></Route>
                    <Route  path='/shop/:name' element={< Details />}></Route>
                    <Route exact path='/counter' element={< AppCount />}></Route>
                    
                </Routes>
            </Router>

            
            
            
            
        
    )
}