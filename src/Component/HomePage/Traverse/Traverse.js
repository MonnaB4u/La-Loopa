import React from 'react';
import './Traverse.css'

const Traverse = () => {
    return (
        <div >
            <div className="traverse" style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0735/8876/9073/files/runner_1944x.jpg?v=1679395017)`,
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

                <div className="">
                    <h1 className="traverse_in">Traverse Our Shop</h1>
                    <button className="traverse_btn">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Traverse;
