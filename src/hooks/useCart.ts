import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";
import type { Guitar, cartGuitar, CartItem} from "../types/Types";



export const useCart = () => {
    const loadCart = () => {
        const localStorageCart = localStorage.getItem("cart")
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }


    const [data, setData] = useState(db);
    const [cart, setCart] = useState(loadCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const totalCart = useMemo(() => (cart.reduce((total, item) => total + (item.price * item.quantity), 0)), [cart])

    function clearCart() {
        setCart([])
        setPermStorage();
    }

    function removeGuitar(id) {
  const index = cart.findIndex((guitar => guitar.id === id));
  var guitarInCart = cart[index];
  if (guitarInCart.quantity === 1) return;
  guitarInCart.quantity -= 1;
  cart[index] = guitarInCart;
  setCart([...cart])
  setPermStorage();
}

function addGuitar(id:Guitar) {
  const index = cart.findIndex((guitar => guitar.id === id));
  var guitarInCart = cart[index];
  if (guitarInCart.quantity >= 5) return;
  guitarInCart.quantity += 1;
  cart[index] = guitarInCart;
  setCart([...cart])
  setPermStorage();
}

    return {
        data,
        setData,
        cart,
        setCart,


        clearCart,
        totalCart,
        isEmpty,
        addGuitar,
        removeGuitar
    }
}