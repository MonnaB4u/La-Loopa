import React, { useState } from 'react';
import './Sunglass.css'
import data from '../../FakeData/SunglassData'
import { useNavigate } from 'react-router-dom';

const Sunglass = () => {
    const [Data] = useState(data)
    const navigate=useNavigate()
    return (
        <div className="bg" style={{ margin: "1rem" }}>
            <div className="StoreCollection text_c" >
                <h3 style={{ marginTop: "3rem" }}>SUNGLASS</h3>
                <div id="grid" style={{ margin: "3rem 0rem" }}>
                    {
                        Data.map((each, i) =>
                            <div className=""  onClick={()=>navigate(`/product/${each.id}`)}>
                                <img src={each.img} alt="" />
                                <span>{each.name}</span>
                                <div className="">Price: ${each.price}</div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Sunglass;
