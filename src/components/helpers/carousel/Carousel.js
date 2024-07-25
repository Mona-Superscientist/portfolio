import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { useTheme } from '../../../context/ThemeContext';


const CustomCarousel = ({ items }) => {
    const { theme } = useTheme();

    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={false}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={false}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={30}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} className="arrow arrow-prev">
                        &#10094;
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} className="arrow arrow-next">
                        &#10095;
                    </button>
                )
            }
        >
            {items.map((item, index) => (
                <div key={index} className={`carousel-item ${theme}`}>
                    {item}
                </div>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;
