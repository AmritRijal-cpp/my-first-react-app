import "./Cart.css";
import { useState, useEffect } from 'react';

function Cart({ count, reset }) {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []); // Load cart items from local storage on component mount

    const addToCart = (qty) => {
        if (qty === 0) {
            alert("Enter a valid number");
            return;
        }
    
        const productTotalPrice = parseFloat(productPrice.replace("$", "")) * qty;
        const existingProductIndex = cartItems.findIndex(item => item.name === productName);
        if (existingProductIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += qty;
            updatedCartItems[existingProductIndex].totalPrice += productTotalPrice;
            setCartItems(updatedCartItems);
        } else {
            const newItem = {
                name: productName,
                price: productPrice,
                quantity: qty,
                totalPrice: productTotalPrice
            };
            setCartItems(prevItems => [...prevItems, newItem]);
        }
        addCartToLocal(updatedCartItems)
        alert("Item added to cart!");
    };

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cartItems));
    // }, [cartItems]); // Save cart items to local storage whenever it changes

    const addCartToLocal = (cartItems) => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const onResetState = () => {
        reset();
    }

    const setProductDetails = (name, price, qty) => {
        setProductName(name);
        setProductPrice(price);
        setQuantity(qty);
    };

    return (
        <button className="cart"
            onClick={() => {
                addToCart(count);
                onResetState()
                setProductDetails("Fall Limited Edition Sneakers",
                    "$125.00",
                    count)
            }}>
            Add to Cart
        </button>
    );
}

export default Cart;
