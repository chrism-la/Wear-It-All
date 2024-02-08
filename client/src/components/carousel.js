// folder components - file carousel.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://plus.unsplash.com/premium_photo-1661281211646-1addb50c802a"
                    alt="clothes on hangers"
                />
                <Carousel.Caption>
                    <h5>Embark on an Adventure</h5>
                    <p>
                        as you navigate the digital aisles of our web app,
                        seeking the perfect garment that seamlessly blends style
                        and comfort for your upcoming special event or casual
                        hangout with friends.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?"
                    alt="folded clothes"
                />
                <Carousel.Caption>
                    <h5>Browse through our Virtual Aisles</h5>
                    <p>
                        each garment is not just a piece of fabric; it's a
                        cherished secret, waiting to be whispered to someone
                        special in your life.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1602036598416-5604b2e2a7ed?"
                    alt="Thank You"
                />
                <Carousel.Caption>
                    <h5>In the Spirit of Generosity</h5>
                    <p>
                        our web app becomes a virtual haven where kindness
                        weaves through every click. Imagine the joy of gifting,
                        not just clothing, but a moment of warmth and comfort to
                        someone in need.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
