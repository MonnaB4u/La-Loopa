import React, { useState } from 'react';
import './Clothes.css'
import data from '../../FakeData/ClothesData'
import { useNavigate } from 'react-router-dom';
const Clothes = () => {
    const [Data] = useState(data)
    const navigate=useNavigate()

    return (
      <div className="bg" style={{ margin: "1rem" }}>
         <div className="StoreCollection text_c" >
            <h3 style={{marginTop:"3rem"}}>CLOTHES</h3>
            <div id="grid" style={{margin:"3rem 0rem"}}>
                {
                    Data.map((each, i) =>
                     <div className="" onClick={()=>navigate(`/product/${each.id}`)}>
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

export default Clothes;
