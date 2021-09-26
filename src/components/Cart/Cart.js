import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    // const totalReducer = (previous, person) => previous + person.donation;

    // const total = cart.reduce(totalReducer, 0);

    let total = 0;
    for (const person of cart) {
        total = total + person.donation;
    }
    return (
        <div className="cart-container">
            <h3><FontAwesomeIcon icon={faUser} />  Persons Added: {props.cart.length} </h3>
            <br />
            <h3>Total Amount: $ {total}</h3>
            {cart.map((item, index) => <h3 key={index}>{item.name}</h3>
            )}
        </div>
    );
};

export default Cart;