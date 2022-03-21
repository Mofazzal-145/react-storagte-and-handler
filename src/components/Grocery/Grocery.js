import React, { useEffect, useState } from 'react';
import Grocery1 from '../Grocery1/Grocery1';

const Grocery = () => {
    // advanced
    const [grocerys, setGrocery] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setGrocery(data))
    },[])

    // ex......
   /*  const grocerys = [
        {
          "id": "6238d85d65353668d73725dd",
          "price": 1687.128,
          "name": "Natasha Pitts"
        },
        {
          "id": "6238d85df62e20f2da09f758",
          "price": 2014.3909,
          "name": "Watkins Abbott"
        },
        {
          "id": "6238d85d2f7978c0dbe4e25d",
          "price": 1679.1381,
          "name": "Dianna Finley"
        },
        {
          "id": "6238d85d67d77c439b7ce649",
          "price": 1576.4091,
          "name": "Berta Dejesus"
        },
        {
          "id": "6238d85d92fefbbfebcae11e",
          "price": 1350.4885,
          "name": "Howell Chan"
        }
      ] */
    // ex ---
   /*  const grocerys = [
        {id:1, name: 'rice', price: 75},
        {id:2, name: 'salt', price: 100},
        {id:3, name: 'sugar', price: 150},
        {id:4, name: 'dal', price: 200},
        {id:5, name: 'oil', price: 800},
    ] */
    return (
        <div>
            <h5>Grocery store here!!</h5>
            {
                grocerys.map(grocery => <Grocery1 
                    key = {grocery.id}
                    grocery = {grocery}
                    ></Grocery1>)
            }
        </div>
    );
};

export default Grocery;