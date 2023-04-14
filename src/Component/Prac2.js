import React from 'react';

const Prac2 = (props) => {
    let data = props.cart
    console.log(data);
    return (
        <div className="text_c">
           {
            data.map((carts, i) =>
            <div className="">
                 <h1>{carts.name}</h1>
            </div>
            )
           }
        </div>
    );
};

export default Prac2;
