import React, { useState } from 'react';
import './AddFitness.css'
import data from '../../FakeData/AddFitness'

const AddFitness = () => {
    const [Data] = useState(data)
    const [select, setSelect] = useState()
    const [count, setCount] = useState(1)

    const handleImg = (e) => {
        setSelect(e)
    }
    console.log(select)
    return (
        <div className="" style={{ padding: "0rem 2rem", }}>
            <div className="brd"></div>
            <div className="AddFitness">
                <div className="flex1" style={{ margin: "0 2rem" }}>

                    <div className="">
                        {
                            !select
                                ?
                                <div className="" >
                                    <img style={{ height: "60%" }} src="https://cdn.shopify.com/s/files/1/0735/8876/9073/products/382288286879580160_900x.jpg?v=1678808883 " alt="" />
                                </div>
                                :
                                <div className="" >
                                    <img style={{ height: "60%" }} src={select.img} alt="" />
                                </div>

                        }
                    </div>

                    <div id="grid" >
                        {
                            Data.map((each, i) =>
                                <div className="">
                                    <img onClick={() => handleImg(each)} style={{}} src={each.img} alt="" />
                                    {/* <span>{each.name}</span>
                                    <div className="">Price: ${each.price}</div> */}
                                </div>

                            )
                        }
                    </div>

                </div>

                <div className="flex1" >
                    <div className="">
                        {
                            !select
                                ?
                                <div className="text_c">
                                    <h2> 11 IN KIT UPGRADE RESISTANCE LOOP BANDS HOME EXERCISE SPORTS FITNESS
                                        Regular price</h2>
                                    <span>$37.97</span>
                                </div>
                                :
                                <div className="text_c">
                                    <h2 style={{ fontSize: "30px" }}>{select.name}</h2>
                                    <span className="text_c">Price: ${select.price}</span>
                                </div>

                        }
                    </div>
                    <div className="brd"></div>

                    <div className="cartNum text_c">
                        <span style={{ borderRight: "1px solid white", cursor: "pointer" }} onClick={() => setCount(count - 1)}>-</span>
                        <span>{count}</span>
                        <span style={{ borderLeft: "1px solid white", cursor: "pointer" }} onClick={() => setCount(count + 1)}>+</span>
                    </div>

                    <div className="cartBtn">
                        <button style={{ marginTop: "1.5rem" }}>Add to Cart</button>
                        <button style={{ marginTop: "1.5rem", background: "rgb(67, 67, 225)" }}>Buy with shop</button>
                    </div>

                </div>
            </div>

            <div className="brd"></div>

            <div className="text_c flex-center" style={{
                paddingBottom: "2rem"

            }} >

                <div className="text-center">
                    <h2>SIGN UP AND SAVE 10%</h2>
                    <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div className="">
                        <input type="text" className="border"
                            placeholder='Enter your email'
                            style={{
                                width: "50%",
                                height: "2rem",
                                background: "none",
                                padding: ".5rem"


                            }} />
                        <button className="btnBG" style={{ width: "30%", height: "2rem" }}>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddFitness;
