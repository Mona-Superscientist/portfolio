import React, { useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { useTheme } from '../../../context/ThemeContext';


const CustomCarousel = ({ items }) => {
    const { theme } = useTheme();
    const [carouselSettings, setCarouselSettings] = useState({
        numItemsToShow: 1,
        centerSlidePercentage: 30
    });

    useEffect(() => {
        const handleResize = () => {
            let numItemsToShow = 1;
            let centerSlidePercentage = 30;

            if (window.innerWidth < 600) {
                numItemsToShow = 1;
                centerSlidePercentage = 90;
            } else if (window.innerWidth > 600 && window.innerWidth < 960) {
                numItemsToShow = 2;
                centerSlidePercentage = 45;
            } else {
                numItemsToShow = 3;
                centerSlidePercentage = 35;
            }

            setCarouselSettings({
                numItemsToShow,
                centerSlidePercentage
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { numItemsToShow, centerSlidePercentage } = carouselSettings;

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
            centerSlidePercentage={centerSlidePercentage}
            showIndicators={false}
            show={numItemsToShow}
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
