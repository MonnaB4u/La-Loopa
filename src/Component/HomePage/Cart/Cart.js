import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((pd, prd) => pd + prd.price, 0);

    let shipping = 0;
    if (total >= 200) {
        shipping = 0;
    } else if (total >= 100) {
        shipping = 50;
    } else if (total >= 150) {
        shipping = 20;
    }

    const tax = (total / 10).toFixed(2)
    const grandTotals = (total + shipping + Number(tax))
    const grandTotal = grandTotals

    const { id } = useParams();
    const findId = cart.find(product => product.id === id)
    const navigation = useNavigate()

    const handlePd = () => {
        if (cart.length === 0) {
            alert("Please Add to Cart First Before Confirm You Order ")
        } else {
            navigation(`/orderConfirm/${findId._id}`)

        }
    }
    return (
        <div>
            <p>Item Added: {cart.length}</p>
            <p>Tax: {tax}</p>
            <p>Shipping: {shipping}</p>
            <p>Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;
