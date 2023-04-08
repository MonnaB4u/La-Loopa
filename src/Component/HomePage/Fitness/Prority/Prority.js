import React from 'react';
import './Prority.css'
const Prority = () => {
    return (
        <div>
            <div className="Prority" style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0735/8876/9073/files/man-adjusts-his-shirt-cuffs-below-watch_1944x.jpg?v=1679784842)`,
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

                <div className="text_c ProrityBox">
                    <h4>LALOOP STORE</h4>
                    <h1>YOUR APPEARANCE IS OUR PRIORITY</h1>
                    <button >Shop Our Product</button>
                </div>

            </div>

        </div>
    );
};

export default Prority;
