import "./Cart.css"
import { useState } from 'react';

function Cart({count, reset}) {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (quantity) => {
        if (quantity === 0) {
            alert("Enter a valid number");
            return;
        }

        const [productName, setProductName] = useState("");
        const [productPrice, setProductPrice] = useState("");
        const [quantity, setQuantity] = useState(0);
        

        const existingProductIndex = cartItems.findIndex(item => item.name === productName);
        if (existingProductIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += quantity;
            updatedCartItems[existingProductIndex].totalPrice += productTotalPrice;
            setCartItems(updatedCartItems);
        } else {
            const newItem = {
                name: productName,
                price: productPrice,
                quantity: quantity,
                totalPrice: productTotalPrice
            };
            setCartItems(prevItems => [...prevItems, newItem]);
        }

        // updateCartCount(cartCount + quantity);
        saveCartToLocalStorage();
        alert("Item added to cart!");
    };

    const saveCartToLocalStorage = () => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

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
                    onClick={() => {addToCart(count);
                                    onResetState()
                                    setProductDetails("Fall Limited Edition Sneakers",
                                                      "$125.00",
                                                      count)
                                    }}>
                    Add to Cart
            </button>
    );
}

export default Cart