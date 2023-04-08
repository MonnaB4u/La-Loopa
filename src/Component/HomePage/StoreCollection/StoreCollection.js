import React, { useState } from 'react';
import './StoreCollection.css'
import Data from '../../FakeData/StoreCollection'
import { useNavigate } from 'react-router-dom';

const StoreCollection = () => {
    const [data] = useState(Data)
    const navigate = useNavigate()
    console.log(navigate)
    return (
       <div className="">
         <div className="StoreCollection text_c">
            <h3>LA LOOP STORE COLLECTION</h3>
            <div className="grid" style={{margin:"3rem 0rem"}}>
                {
                    data.map((each, i) =>
                        <div onClick={() => navigate(each.navigate)} className="grid_id text_c" style={{
                            backgroundImage: `url(${each.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            width: "100%",
                            height: "30rem",
                            objectFit: "cover",
                            zIndex: 1,
                            overflow: "hidden"

                        }}>
                            <h4>{each.name}</h4>
                        </div>

                    )
                }
            </div>
        </div>
       </div>
    );
};

export default StoreCollection;
