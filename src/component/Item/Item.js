import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Item.css';

const Item = (props) => {
    const {name, author, imageURL,  price} = props.it;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleBuy = (bookInfo) => {
        const newOrder = {
            name: name,
            price: price,
            author: author,
            buyer: loggedInUser.email
        }
        console.log(newOrder);
        const url = `http://localhost:5002/placeOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => console.log(res))
    }
    return (
        <div style={{width: '98%'}}>
            <div className="itemArea">
                <div>
                    <div className="outer">
                        <div className="inner"><img src={imageURL} alt=""/></div>                        
                    </div>                
                    <p id="namee">{name}</p>
                    <p>Athor: {author}</p>
                    <div className="footArea">
                        <p className="price">${price}</p>
                        <button onClick={() => handleBuy(name, author, price)} className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Item;