import React, { useEffect, useState } from 'react';
import  { Card,Spinner  }  from 'react-bootstrap';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from 'react-router-dom';
    import { Details } from '../details/details';

export const Shop = () => {
    // let [loading,setload] = useState(false)
    // let load = '';
    let [prods,setprods] = useState([]);

    


     useEffect(() => {
         
         fetch('https://fakestoreapi.com/products?limit=5')
         .then(res=>res.json())
         .then(json=>{setprods(json)})
         //   setload(false)
        //    setload(true) 
      
    });
    
    
    // loading = true
    
    
    return (
        

            <div className='row m-3 justify-content-around'>
                
                {
                    prods && prods.length ? 
                        prods.map(product => {
                            return <Card className='col-3 m-2' key={product.title}>
                            <Card.Img variant="top" src={product.image} className='img-fluid' />
                            <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.describtion}
                            </Card.Text>
                                <Link to={`/shop/${product.id}`}>
                                
                                    <a variant="primary" className='btn btn-primary'  >Go somewhere </a>
                                </Link>
                            
                            
                            </Card.Body>
                        </Card>
                        }): <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                }
    
                
            </div>
         
        
        
    )
}