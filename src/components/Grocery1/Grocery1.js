import React from 'react';
 
// advanced
const Grocery1 = (props) => {
    const {id, name, price} = props.grocery;
    return (
        <div>
            <h1>ID:{id}</h1>
            <h3>Buy this: {name}</h3>
            <p>only for:$ {price}</p>
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