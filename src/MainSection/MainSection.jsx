import { useState } from "react"
import "./MainSection.css"
import Cart from "./Cart/Cart";

function MainSection() {
    const [isMainImage, setIsMainImage] = useState(null);

    const handleMainImage = (image) => {
        setIsMainImage(image);
    }

    const [isClicked, setIsClicked] = useState(0);

    const handleClick = (index) => {
        setIsClicked(index);
        handleMainImage(mainImage[index]);
    };

    const [count, setCount] = useState(0);

    const updateCount = (value) => {
        if (count + value >= 0) {
            setCount(prevCount => prevCount + value);

        }
    };
    const resetState = () => {
        setCount (0);
    }

    const mainImage =[
        { id:1, src: "images/image-product-1.jpg", alt: "sneaker" },
        { id:2, src: "images/image-product-2.jpg", alt: "sneaker" },
        { id:3, src: "images/image-product-3.jpg", alt: "sneaker" },
        { id:4, src: "images/image-product-4.jpg", alt: "sneaker" },
    ]
    
    const images = [
        { id:1, src: "images/image-product-1-thumbnail.jpg", alt: "sneaker" },
        { id:2, src: "images/image-product-2-thumbnail.jpg", alt: "sneaker" },
        { id:3, src: "images/image-product-3-thumbnail.jpg", alt: "sneaker" },
        { id:4, src: "images/image-product-4-thumbnail.jpg", alt: "sneaker" },
    ]

    return (
        <main>
            <div className="leftContainer" id="leftContainer">
                <div className="mainImageContainer">
                    <span>
                        <img
                            src="images/icon-previous.svg"
                            alt="previous"
                            className="previous"
                            onClick={() => {
                                const currentIndex = mainImage.findIndex(
                                    (image) => image.src === isMainImage?.src
                                );
                                const newIndex =
                                    currentIndex === 0
                                        ? mainImage.length - 1
                                        : currentIndex - 1;
                                handleMainImage(mainImage[newIndex]);
                                handleClick(newIndex);
                            }}
                        />
                    </span>
                    {isMainImage ? (
                        <img
                            key={isMainImage.id}
                            src={isMainImage.src}
                            alt={isMainImage.alt}
                            className="mainImage"
                        />
                    ) : (
                        <img
                            src="images/image-product-1.jpg"
                            alt="sneaker"
                            className="mainImage"
                        />
                    )}
                    <span>
                        <img
                            src="images/icon-next.svg"
                            alt="next"
                            className="next"
                            onClick={() => {
                                const currentIndex = mainImage.findIndex(
                                    (image) => image.src === isMainImage?.src
                                );
                                const newIndex =
                                    currentIndex === mainImage.length - 1
                                        ? 0
                                        : currentIndex + 1;
                                handleMainImage(mainImage[newIndex]);
                                handleClick(newIndex);
                            }}
                        />
                    </span>
                </div>
                <div className="thumbnailImage">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            onClick={() => handleClick(index)}
                            style={{
                                border: isClicked === index ? '2px solid red' : 'none',
                                opacity: isClicked === index ? 0.5 : 1
                            }}
                        />
                    ))}
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
                    <Cart
                        count = {count}
                        reset = {resetState} 
                    />
                </div>
            </div>
        </main>

    )
}


export default MainSection