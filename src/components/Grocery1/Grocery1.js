import React from 'react';
import './Grocery1.css'
// advanced
const Grocery1 = (props) => {
    const {id, name, price} = props.grocery;

    const addToCart = (id) =>{
        console.log('mofu',id)
    }
    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h1>ID:{id}</h1>
            <h3>Buy this: {name}</h3>
            <p>only for:$ {price}</p>
            <button onClick={addToCartWithParam}>add to cart</button>
            <button onClick={()=> addToCart(id)}>Purchase</button>
        </div>
    );
};


/* const Grocery1 = (props) => {
    return (
        <div>
            <h3>Buy this: {props.grocery.name}</h3>
            <p>only for:$ {props.grocery.price}</p>
        </div>
    );
};
 */
export default Grocery1;