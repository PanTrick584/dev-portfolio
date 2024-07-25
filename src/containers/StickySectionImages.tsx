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
    { color: 'yellowgreen' },
];

const StickySectionImages: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const sectionCarouselRef = useRef<HTMLDivElement | null>(null);
    const [slideIn, setSlideIn] = useState<string>('slide-in');

    useEffect(() => {
        const handleScroll = () => {
            setSlideIn('')
            if (sectionCarouselRef.current) {
                const sectionTop = sectionCarouselRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionCarouselRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 2);
                const newIndex = Math.min(Math.floor(scrollRatio * colors.length), colors.length -1);
                setCurrentIndex(prev => {
                    // let direction = newIndex < prev ? "slide-in" : "slide-out";
                    if (newIndex !== prev) {
                        console.log("rózne");
                        // direction = 'slide-out';
                        return newIndex
                    }
                    console.log(prev);
                    
                    if (newIndex !== colors.length-1) setSlideIn("slide-in")
                    return prev;
                });
            }

        };
    
        window.addEventListener('scroll', handleScroll);
        return () =>   window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    return (
        <div
            className={`sticky-section-carousel`}
            style={{height: `${colors.length}00vh`}}
            ref={sectionCarouselRef}
        >
            <div className="content" >
                <div className={`content-box ${slideIn}`} style={{backgroundColor: `${colors[currentIndex].color}`}}>
                    <p>HELLO!!!!</p>
                </div>
            </div>
        </div>
    );
};

export default StickySectionImages;