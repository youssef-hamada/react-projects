import React, { useEffect,useState } from 'react';
import  { Card,Button  }  from 'react-bootstrap';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link, 
    useParams} from 'react-router-dom';
// import { Shop } from '../shop/shop';
// import { AppCount } from '../counter/counter';


export const Details = () => {
    let id = useParams();
    let [prod,setprod] = useState([]);
    // console.log(name)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id.name}`)
         .then(res=>res.json())
         .then(json=>{setprod(json)})
         
    })
    

   
    return (
        <div className='container'>

            <div className='row justify-content-center '>
                <Card className='col-3 my-2'>
                <Card.Img variant="top" src={prod.image} className=' mx-auto w-50'  />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                    
                </Card.Body>
                </Card>

            </div>
        </div>
    )
}