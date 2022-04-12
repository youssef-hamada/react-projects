import React, { useState } from 'react';
import  { Button }  from 'react-bootstrap';

export const AppCount = () => {
    let [count, setcount] = useState(0)
    const increase = () => {
        setcount(count+1)
    }
    const decrease = () => {
        setcount(count-1)
    }
    return (
        <div>
            <p className='text-danger fs-3'>
                {count}
            </p>

            <Button className='btn btn-dark mx-3' onClick={increase}>increase</Button>
            <Button onClick={decrease} className='btn btn-primary mx-3'>decrease</Button>
            
        </div>
    )
}