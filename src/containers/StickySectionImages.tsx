import React, { useState, useEffect, useRef } from 'react';
import './styles/sticky-section-carousel.scss';
import { ContentItem } from '../types/types';


// interface ContentItem {
//     id: number;
//     text: string;
//     background?: string;
// }

type ContentProps = {
    content: ContentItem[];
}

const StickySectionImages: React.FC<ContentProps> = ({ content }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentText, setcurrentText] = useState<string>(content[currentIndex].text);
    const sectionCarouselRef = useRef<HTMLDivElement | null>(null);
    const [slideIn, setSlideIn] = useState<string>('slide-in');
    const [style, setStyle] = useState<React.CSSProperties>({
        backgroundColor: content[0].background
    });

    useEffect(() => {
        const handleScroll = () => {
            if (sectionCarouselRef.current) {
                const sectionTop = sectionCarouselRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionCarouselRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / (sectionHeight * .85), 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * content.length), content.length - 1);
                setCurrentIndex(prev => {
                    // let direction = newIndex < prev ? "slide-in" : "slide-out";
                    // if (prev === 0 || prev === colors.length-1) setSlideIn("slide-in");
                    if (newIndex > prev) {
                        // setSlideIn("slide-in");
                        setSlideIn("")
                        // setSlideIn("slide-in")
                        setTimeout(() => setcurrentText(content[currentIndex + 1].text), 100)
                        setTimeout(() => setSlideIn("slide-in"), 100)
                        setTimeout(() => setStyle({
                            backgroundColor: content[newIndex].background
                        }), 100)

                    }
                    if (newIndex < prev) {
                        setSlideIn("");
                        setTimeout(() => setSlideIn("slide-in"), 100)
                        setTimeout(() => setStyle({
                            backgroundColor: content[newIndex].background
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    return (
        <div
            className={`sticky-section-carousel`}
            style={{ height: `${content.length * 1}00vh` }}
            ref={sectionCarouselRef}
        >
            <div className="content" style={style}>
                <div
                    className={`content-box ${slideIn}`}
                >
                    <p>{currentText}</p>
                </div>
            </div>
        </div>
    );
};

export default StickySectionImages;