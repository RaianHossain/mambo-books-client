import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar'
import './CheckOut.css'

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5002/orderDetails/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data)
            let ttl = 0;
            for(let i = 0; i <order.length; i++) {
                ttl = ttl+parseInt(order[i].price);
                setTotalPrice(ttl);
            }
        })
    })
    
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="cart">
            <h1>Checkout</h1>
            <div>
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                    {
                        order.map(ord => <tr>
                            <td>{ord.name}</td>
                            <td className="middata">{ord.author}</td>
                            <td className="data">${ord.price}</td>
                        </tr> )
                    }
                    
                    <tr>
                        <td><b>Total</b></td>
                        <td></td>
                        <td className="total"><b>${totalPrice}</b></td>
                    </tr>
                </table>
            </div>
            <div className="btndiv"><button className="btn chkbtn">Checkout</button></div>
                
            </div>
            
            
            
        </div>
    );
};

export default CheckOut;