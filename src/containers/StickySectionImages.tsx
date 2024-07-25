// src/components/StickySection.tsx
import React, { useState, useEffect, useRef } from 'react';
import './styles/sticky-section-carousel.scss';

interface ContentItem {
    color: string;
}

const colors: ContentItem[] = [
    { color: 'burlywood' },
    { color: 'cadetblue' },
    { color: 'saddlebrown' },
    { color: 'hotpink' },
    { color: 'yellowgreen' },
];

const StickySectionImages: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const sectionCarouselRef = useRef<HTMLDivElement | null>(null);
    const [currentImage, setCurrentImage] = useState<number>(0);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (sectionRef.current) {
    //             const sectionTop = sectionRef.current.getBoundingClientRect().top;
    //             const sectionHeight = sectionRef.current.clientHeight;
    //             const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 1);
    //             const newIndex = Math.min(Math.floor(scrollRatio * colors.length), colors.length -1);
    //             setCurrentIndex(newIndex);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () =>   window.removeEventListener('scroll', handleScroll);
    // }, [currentIndex]);

    //add images 
    // const handleImageChange = (move: number) => {
    //     setCurrentImage( prev => {
    //         let activeImg = prev
    //         if( activeImg >= 0 && activeImg < colors.length -1) {
    //             move ? activeImg++ : activeImg--
    //             if (activeImg < 0) activeImg = 0
    //             return activeImg
    //         }

    //         return 0;
    //     })
    // }

    return (
        <div
            className={`sticky-section-carousel`}
            style={{height: `${colors.length}00vh`}}
            ref={sectionCarouselRef}
        >
            <div className="content" >
                {colors.map((color, id) => {
                    return(
                        <div className="content-box" key={id} style={{backgroundColor: `${color}`, transform: currentIndex === id ? `translateX(0)` : `translateX(${id}00%)` }}>HELLO!!!!</div>
                    )
                })}
            </div>
        </div>
    );
};

export default StickySectionImages;