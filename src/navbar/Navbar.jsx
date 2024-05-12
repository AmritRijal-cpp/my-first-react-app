import { useState } from "react";
import "./Navbar.css"

function Navbar() {
    const [isHamburgerActive, setisHamburgerActive] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
        setisHamburgerActive(!isHamburgerActive);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

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
                            <div className="productInfo">
                                <span className="sneakerNameForCart" />
                                <span className="price" /> x
                                <span className="numberOfProduct" />
                                <span className="totalPrice" />
                            </div>
                            <img
                                src="images/icon-delete.svg"
                                alt="delete"
                                onClick={() => { CART.deleteCart() }}
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

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navMenu");
// const navBranding = document.querySelector(".navBranding");
// const overlay = document.createElement("div");
// overlay.classList.add("overlay");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   navBranding.classList.toggle("active");
//   overlay.style.display = overlay.style.display === "block" ? "none" : "block";
// });

// document.body.appendChild(overlay);

// document.querySelectorAll(".navItems").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     navBranding.classList.remove("active");
//     overlay.style.display =
//       overlay.style.display === "block" ? "none" : "block";
//   })
// );

export default Navbar