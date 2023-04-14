import React, { useEffect, useState } from 'react';
import data from '../Component/FakeData/All'
import Prac2 from './Prac2';

const Prac = () => {
    const [Data, setData] = useState(data)
    const [cart, setCart] = useState([])

    // const check = cart.map((d, i) => console.log(d.name, i))
    console.log("cart", cart)

    const handleCart = (e) => {
        let newData = [...cart, e]
        setCart(newData)
    }

    return (

        <div>

            {
                Data.map((each, i) =>
                    <div className="">
                        <button onClick={() => handleCart(each)}>Cart</button>
                    </div>

                )
            }

            {/* ////////Showing Data One by One///////// */}

            {
                cart.map((cart, i) => <>
                    <div className="text_c">
                        <p>{cart.name}</p>
                    </div>
                </>)
            }

        </div>
    );
};

export default Prac;
