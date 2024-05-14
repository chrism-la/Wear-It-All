import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface CarouselItem {
    src: string;
    alt: string;
    caption: string;
}

const carouselItems: CarouselItem[] = [
    {
        src: 'https://plus.unsplash.com/premium_photo-1661281211646-1addb50c802a',
        alt: 'woman looking at close on the phone',
        caption: 'Embark on an adventure and navigate our digital aisles',
    },
    {
        src: 'https://images.unsplash.com/photo-1525562723836-dca67a71d5f1',
        alt: 'girl looking at clothes on hanger',
        caption: 'Seeking the perfect garment that seamlessly blends style and comfort for your upcoming special event or casual hangout with friends.',
    },
    {
        src: 'https://images.unsplash.com/photo-1549934159-af720506e2bb',
        alt: 'couple on picnic',
        caption: 'If you want to make a statement with that special someone, our app is your virtual wardrobe whisperer.',
    },
    // Add more items as needed
];

const MyCarousel: React.FC = () => {
    return (
        <Carousel className="" data-bs-theme="light">
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={item.src} alt={item.alt} />
                    <Carousel.Caption>
                        <h6>{item.caption}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default MyCarousel;
