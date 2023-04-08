import React from 'react';
import './Footer.css'
import { faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div>
            <div className="space-around">
                <div className="footerLogo text_c ">
                    <img src="https://cdn.shopify.com/s/files/1/0735/8876/9073/files/2_5a6edd20-7154-4a50-a297-ee9cadfe94d8_270x.jpg?v=1680143867" alt="" />
                </div>

                <div className="contact text_c">
                    <p>CONTACT INFO </p>
                    <p>Phone# 9057306262</p>
                    <p>Email: lucia@laloop.shop</p>
                    <p>Physical address: La LooP Shop, 467 Speers Rd #4, 363, Oakville ON L6K 2G4, Canada</p>
                </div>

                <div className="footer_Menu text_c">
                    <p>FOOTER MENU </p>
                    <p>Contact US</p>
                    <p>Privacy Policy</p>
                    <p>Return</p>
                    <p>Shipping Policy</p>
                    <p>Terms of Service</p>
                </div>

                <div className="footer_signup text_c">
                    <p>SIGN UP AND SAVE</p>
                    <input type="text" placeholder="Search" />

                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <div className="text_c">

                    </div>
                </div>

                {/* <div className="footer_Menu">

                </div>

                <div className="footer_signup">

                </div> */}
            </div>
        </div>
    );
};

export default Footer;
