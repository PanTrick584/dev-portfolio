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
    // { color: 'yellowgreen' },
];

const StickySectionImages: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const sectionCarouselRef = useRef<HTMLDivElement | null>(null);
    const [slideIn, setSlideIn] = useState<string>('slide-in');
    const [style, setStyle] = useState<React.CSSProperties>({
        backgroundColor: colors[0].color
    });

    useEffect(() => {
        const handleScroll = () => {
            if (sectionCarouselRef.current) {
                const sectionTop = sectionCarouselRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionCarouselRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * colors.length), colors.length -1);
                setCurrentIndex(prev => {
                    // let direction = newIndex < prev ? "slide-in" : "slide-out";
                    // if (prev === 0 || prev === colors.length-1) setSlideIn("slide-in");
                    if (newIndex > prev) {
                        // setSlideIn("slide-in");
                        setSlideIn("")
                        // setSlideIn("slide-in")
                        setTimeout(() => setSlideIn("slide-in"), 100)
                        setTimeout(() => setStyle({
                            backgroundColor: colors[newIndex].color
                        }), 100)

                    }
                    if (newIndex < prev) {
                        setSlideIn("");
                        setTimeout(() => setSlideIn("slide-in"), 100)
                        setTimeout(() => setStyle({
                            backgroundColor: colors[newIndex].color
                        }), 100)
                    }
                    

                    if (newIndex !== prev) {
                        return newIndex
                    }
                    
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
            style={{height: `${colors.length * 2}00vh`}}
            ref={sectionCarouselRef}
        >
            <div className="content" >
                <div
                    className={`content-box ${slideIn}`}
                    style={style}>
                    <p>HELLO!!!!</p>
                </div>
            </div>
        </div>
    );
};

export default StickySectionImages;