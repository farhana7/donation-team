import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faSeedling, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Person.css';

const Person = (props) => {
    // console.log(props);
    const { name, img, age, position, networth, country, donation } = props.person;


    return (
        <div className="person">
            <div style={{ height: "200px" }}>
                <img className="person-img" src={img} alt="" />
            </div>
            <div>
                <h4 className="person-name">{name}</h4>
                <p>Age: {age}</p>
                <p>Position: {position}</p>
                <p>Networth: ${networth}B</p>
                <p>Country: {country}</p>
                <p>Donation: ${donation}M</p>
                <button
                    onClick={() => props.handleAddToCart(props.person)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
                <br />
                <p><FontAwesomeIcon icon={faSeedling} /> </p>
                <p><FontAwesomeIcon icon={faBusinessTime} /> </p>

            </div>


        </div>
    );
};

export default Person;