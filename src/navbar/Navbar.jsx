import { useState, useEffect } from "react";
import "./Navbar.css"

function Navbar() {
    const [isHamburgerActive, setisHamburgerActive] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleMenu = () => {
        setisHamburgerActive(!isHamburgerActive);
    };

    const toggleCart = () => {
        setIsCartOpen(preState => !isCartOpen);
    };

    useEffect(() => {
        // Load cart data from localStorage on component mount
        loadCart();
    }, []);

    const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    };

    const deleteCart = () => {
        localStorage.removeItem("cart");
    }

    return (
        <nav className="navbar">
            <div className={`hamburger ${isHamburgerActive ? 'active' : ''}`}
                onClick={toggleMenu}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
            <a href="#" className={`navBranding ${isHamburgerActive ? 'active' : ''}`}>
                sneakers
            </a>
            <ul className={`navMenu ${isHamburgerActive ? 'active' : ''}`}>
                <li className="navItems">
                    <a href="#" className="navLinks">
                        Collections
                    </a>
                </li>
                <li className="navItems">
                    <a href="#" className="navLinks">
                        Men
                    </a>
                </li>
                <li className="navItems">
                    <a href="#" className="navLinks">
                        Women
                    </a>
                </li>
                <li className="navItems">
                    <a href="#" className="navLinks">
                        About
                    </a>
                </li>
                <li className="navItems">
                    <a href="#" className="navLinks">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="cartProfile">
                <div className="cartLogo">
                    <img
                        src="images/icon-cart.svg"
                        alt="cart icon"
                        onClick={toggleCart}
                    />
                    <span className="numberOfProduct">0</span>
                </div>
                <div className="profile">
                    <img
                        src="images/image-avatar.png"
                        alt="profile logo"
                        onClick={toggleCart}
                    />
                </div>
                {isCartOpen && (<div className="cartOverlay" id="cartOverlay">
                    <h2>Cart</h2>
                    <hr />
                    <div className="productList" id="productList">
                        <div className="product">
                            <img
                                src="images/image-product-1-thumbnail.jpg"
                                alt="sneaker"
                                className="productImage"
                            />
                            {cartItems.map((item, index) => (
                                <div key={item.name} className="productInfo">
                                    <span className={item.name}></span>
                                    <span className={item.price}></span> x
                                    <span className={item.quantity}></span>
                                    <span className={item.totalPrice}></span>
                                </div>
                            ))}
                            <img
                                src="images/icon-delete.svg"
                                alt="delete"
                                onClick={() => deleteCart() }
                                className="deleteCart"
                            />
                        </div>
                        <button className="checkout" id="checkout">
                            Checkout
                        </button>
                    </div>
                </div>
                )}
            </div>


        </nav>
    )
}

export default Navbar