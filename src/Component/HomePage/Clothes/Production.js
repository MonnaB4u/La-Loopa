import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../FakeData/All'
import Navbar from '../Navbar/Navbar';
const Production = () => {
    const [Data] = useState(data)
    const navigate = useNavigate()
    return (
        <div className="bg" >
            <Navbar/>
            <div style={{ margin: "1rem" }}>
                <div className="StoreCollection text_c" >
                    <h3 style={{ marginTop: "3rem" }}>All Product</h3>
                    <div id="grid" style={{ margin: "3rem 0rem" }}>
                        {
                            Data.map((each, i) =>
                                <div className="" onClick={() => navigate(`/product/${each.id}`)}>
                                    <img src={each.img} alt="" />
                                    <span>{each.name}</span>
                                    <div className="">Price: ${each.price}</div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Production;
