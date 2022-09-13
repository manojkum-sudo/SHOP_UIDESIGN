//import { getNodeText } from '@testing-library/react';
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const[value ,setValue]= useState(false);
    const navigate = useNavigate();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
        setValue(true);
    };
    const handleShift =()=>{
        navigate('/');
    }

    return (
        <div>
            <h3>Cart</h3>
            
                <div className="cartWrapper">
                {  products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="cart" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))} 
              
            </div>
            :
            <p>Cart is empty</p>
            <button onClick={handleShift}>Back to HomeScreen</button>

           
            
        </div>
    );
};

export default Cart;