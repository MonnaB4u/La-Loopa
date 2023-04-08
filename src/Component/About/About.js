import React from 'react';
import './About.css'
import Navbar from '../HomePage/Navbar/Navbar';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Footer from '../HomePage/Footer/Footer';
const About = () => {
    return (
        <div className="bg">
            <Navbar />
            <section className="profile  text_c flex-center">
                <h2 className="section-title text-center">Contact Us</h2>
                <div className="card flex-center">

                      <div className="contact text_c">
                    <p>CONTACT INFO </p>
                    <p>Phone# 9057306262</p>
                    <p>Email: lucia@laloop.shop</p>
                    <p>Physical address: La LooP Shop, 467 Speers Rd #4, 363, Oakville ON L6K 2G4, Canada</p>
                </div>
                    <div className="profile_buttons">
                        <button className="btn profile_edit-btn">
                            <FaEdit className='fa-2x text_c' />
                        </button>
                        <button className="btn profile_edit-btn">
                            <FaTrash className='fa-2x text_c' />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};


export default About;
