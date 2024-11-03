import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem.js"
import { clearCart } from "../utility/cartSlice.js";

const Cart = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(store => store.cart.items);
    // const cartItems = useSelector(store => store); //? don't pass store , because whenever store's slice's items will change the component will render everytime

    const handleClick = () => {
        dispatch(clearCart()); // dispatch clear function
    }

    console.log(cartItems)


    return cartItems.length == 0 ? <h1 className="font-bold text-3xl text-center"> Empty Cart </h1> : (
        <div>
            <h1 className="text-center font-bold text-3xl">Cart</h1>
            <button className="font-bold bg-red-100 p-2 m-2"
                onClick={() => handleClick()}>Clear_Cart</button>
            <div className="flex gap-3 m-2 flex-wrap">
                {cartItems.map((cartItem) => (
                    <FoodItem {...cartItem} />
                ))}
            </div>
        </div>
    )
}

export default Cart;