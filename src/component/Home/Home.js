import React, { useEffect, useState } from 'react';
import items from '../../fakedata/itemData.json'
import Item from '../Item/Item';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5002/books')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="bodyArea">
                <div className="itemsArea"> 
                {
                    item.map(it => <Item it={it}></Item>)
                }   
                </div>
                </div>
        </div>
    );
};

export default Home;