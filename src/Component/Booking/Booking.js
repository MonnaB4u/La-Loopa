import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

import { faAdd, faDeleteLeft, faMinus, faTrashAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcPaypal, FaCcVisa } from "react-icons/fa";


const Booking = () => {

    const [getLocalData, setLocalData] = useState(() => {
        const savedItem = localStorage.getItem("product");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
    });


    const handleDcart = e => {
        let newPost = [...getLocalData];
        newPost.splice(0, 1);
        setLocalData(newPost);
    }


    return (
        <div className="bg">
            <Navbar />
            <div className="cart_items">

                <div className="cart_tems-heading card text_c">
                    <h2>Shopping Cart[2 items]</h2>
                    <div className="cart_items-action">
                        <label htmlFor="select">
                            <input type="checkbox" name='select' id="select" />
                            Select all items
                        </label>
                        <button> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                        <button>Shop More </button>
                    </div>
                </div>

                {
                    getLocalData.map((each,i)=>
                        <div className="cart_item card text_c space-around">
                            <input type="checkbox" />
                            <img className="cart_items-img" src={each.img} alt="" />

                            <div className="cart-item-description">
                                <h3 className="production_name">{each.name} </h3>
                                <h4 className="production_price">{each.price}</h4>
                            </div>

                            <div className="cart_item-action">
                                <button className="btn "> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                                <div className="">
                                    <button onClick={() => handleDcart(each)} className="btn "> <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> </button>
                                    <span style={{ margin: "0rem 1rem" }}>{each.length}</span>
                                    <button  className="btn "> <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> </button>
                                </div>
                            </div>
                        </div>)
                }

            </div>

        </div>
    );
};

export default Booking;
