import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Booking = () => {

const [userName, setUserName] = useState ( () => {
 const savedItem = localStorage.getItem("product");
const parsedItem = JSON.parse(savedItem);
return parsedItem || "";
});

const navigate=useNavigate()


console.log(userName)
    return (
        <div className="bg">
            <Navbar/>
            <div className="AddFitness">
                <div className="flex1" style={{ margin: "2rem" }}>
                    <div className="">
                        {
                            !userName
                                ?
                                <div className="" >
                                    <img style={{ height: "60%" }} src="https://cdn.shopify.com/s/files/1/0735/8876/9073/products/382288286879580160_900x.jpg?v=1678808883 " alt="" />
                                </div>
                                :
                                <div className="" >
                                    <img style={{ height: "60%" }} src={userName.img} alt="" />
                                </div>

                        }
                    </div>


                </div>

                <div className="flex1" >
                    <div className="">
                        {
                            !userName
                                ?
                                <div className="text_c">
                                    <h2> 11 IN KIT UPGRADE RESISTANCE LOOP BANDS HOME EXERCISE SPORTS FITNESS
                                        Regular price</h2>
                                    <span>$37.97</span>
                                </div>
                                :
                                <div className="text_c">
                                    <h2 style={{ fontSize: "30px" }}>{userName.name}</h2>
                                    <span className="text_c">Price: ${userName.price}</span>
                                </div>

                        }
                    </div>
                    <div className="brd"></div>

                    <div className="space_between text_c">

                        {/* <div className="cartNum">
                            <span onClick={()=>handleDcart(CartData)} handleDcart style={{ borderRight: "1px solid white", cursor: "pointer" }} >-</span>
                            <span>{CartData.length}</span>
                            <span onClick={() => handlePrd(CartData)} style={{ borderLeft: "1px solid white", cursor: "pointer" }}>+</span>
                        </div> */}

                        <div className="">
                            {/* <Cart cart={cart} /> */}
                        </div>

                    </div>

                    <div className="cartBtn">
                        <button  style={{ marginTop: "1.5rem" }}>Add to Cart</button>
                        <button style={{ marginTop: "1.5rem", background: "rgb(67, 67, 225)" }}>Buy with shop</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Booking;
