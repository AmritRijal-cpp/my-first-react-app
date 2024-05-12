import { useState } from "react"
import "./MainSection.css"

function MainSection() {
    const [count, setCount] = useState(0);

    const updateCount = (value) => {
        if (count + value >= 0) {
            setCount(prevCount => prevCount + value);

        }
    };
    return (
        <main>
            <div className="leftContainer" id="leftContainer">
                <div className="mainImageContainer">
                    <span>
                        <img
                            src="images/icon-previous.svg"
                            alt="previous"
                            className="previous"
                            onclick="(previous())"
                        />
                    </span>
                    <img
                        src="images/image-product-1.jpg"
                        alt="sneaker"
                        className="mainImage"
                    />
                    <span>
                        <img
                            src="images/icon-next.svg"
                            alt="next"
                            className="next"
                            onclick="(next())"
                        />
                    </span>
                </div>
                <div className="thumbnailImage">
                    <img
                        className="thumbnail selected"
                        src="images/image-product-1-thumbnail.jpg"
                        alt="sneaker"
                        onclick="activeImage(1); activeBorder(1)"
                    />
                    <img
                        className="thumbnail"
                        src="images/image-product-2-thumbnail.jpg"
                        alt="sneaker"
                        onclick="activeImage(2); activeBorder(2)"
                    />
                    <img
                        className="thumbnail"
                        src="images/image-product-3-thumbnail.jpg"
                        alt="sneaker"
                        onclick="activeImage(3); activeBorder(3)"
                    />
                    <img
                        className="thumbnail"
                        src="images/image-product-4-thumbnail.jpg"
                        alt="sneaker"
                        onclick="activeImage(4); activeBorder(4)"
                    />
                </div>
            </div>
            <div className="rightContainer" id="rightContainer">
                <div className="rightContainerTop" id="rightContainerTop">
                    <span className="company">SNEAKER COMPANY</span>
                    <h2 className="sneakerName">Fall Limited Edition Sneakers</h2>
                    <p className="description">
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything the
                        weather can offer.
                    </p>
                    <div className="price" id="price">
                        <span className="discountPrice">$125.00</span>
                        <span className="discount">50%</span>
                        <div className="spacer" />
                        <br />
                        <span className="fullPrice">$250.00</span>
                    </div>
                </div>
                <div className="rightContainerBottom" id="rightContainerBottom">
                    <div className="counter">
                        <button className="minus" onClick={() => updateCount(-1)}>
                            <img src="images/icon-minus.svg" alt="minus" />
                        </button>
                        <span className="count">{count}</span>
                        <button className="plus" onClick={() => updateCount(1)}>
                            <img src="images/icon-plus.svg" alt="plus" />
                        </button>
                    </div>
                    <button className="cart" onclick="CART.add(count)">
                        Add to cart
                    </button>
                </div>
            </div>
        </main>

    )
}

export default MainSection