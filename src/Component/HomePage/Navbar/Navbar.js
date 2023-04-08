import React, { useState } from 'react';
import './Navbar.css'
import { faCartFlatbed, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
    const [show, setShow] = useState(0);

    // const hideButton = () => {
    //   setShow(true);
    // };


    return (
        <div className="container app">

            <div className="nav_offer">
                <span class="">15% off the shipping of your first order with the code WELCOME15</span>
            </div>

            <div className="nav1">
                <ul>
                    <i> <FaFacebook className="fa-3x" /> </i>
                    <i> <FaInstagram className="fa-3x" /> </i>
                    <i> <FaTwitter className="fa-3x" /> </i>

                </ul>
            </div>

            <div className="nav_logo">
                <div className="space_between nav1_eq">
                    {
                        show == 0 ?
                            <FontAwesomeIcon icon={faSearch} onClick={() => setShow(1)} />
                            :
                            <input type="text" placeholder="Search Your Needs" />
                    }


                    <img src="https://cdn.shopify.com/s/files/1/0735/8876/9073/files/2_5a6edd20-7154-4a50-a297-ee9cadfe94d8_270x.jpg?v=1680143867" alt="" />
                    <FontAwesomeIcon icon={faCartFlatbed} />
                </div>
            </div>

            <div className="nav2">
                <ul>
                    <li  > <a href="/">Home</a> </li>
                    <li  > <a href="/contact">Contact</a> </li>
                    <li> <a href="/booking">Booking</a> </li>
                    <li> <a href="/about">About</a></li>
                    <li> <a href="/production">Production</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
