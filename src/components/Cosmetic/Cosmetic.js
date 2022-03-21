import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetic = () => {
    const first = 11;
    const second = 22;
    const total = add(first, second);
    return (
        <div>
            <h2>Welcome to the world!!</h2>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetic;