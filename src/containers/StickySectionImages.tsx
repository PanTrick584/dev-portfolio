import React, { useState, useEffect, useRef } from 'react';
import './styles/sticky-section-carousel.scss';
import { ContentItem } from '../types/types';

type ContentProps = {
    content: ContentItem[];
}

const StickySectionImages: React.FC<ContentProps> = ({ content }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentText, setCurrentText] = useState<string>(content[currentIndex].text);
    const [currentDescription, setCurrentDescription] = useState<string | undefined>(content[currentIndex].description);
    const sectionCarouselRef = useRef<HTMLDivElement | null>(null);
    const [slideIn, setSlideIn] = useState<string>('slide-in');
    const [style, setStyle] = useState<React.CSSProperties>({ backgroundColor: content[0].background });

    useEffect(() => {
        const handleScroll = () => {
            if (sectionCarouselRef.current) {
                const sectionTop = sectionCarouselRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionCarouselRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / (sectionHeight - window.innerHeight), 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * content.length), content.length - 1);

                if (newIndex !== currentIndex) {
                    setCurrentIndex(newIndex);
                    setSlideIn("");

                    setTimeout(() => {
                        setCurrentText(content[newIndex].text);
                        setCurrentDescription(content[newIndex].description);
                        setStyle({ backgroundColor: content[newIndex].background });
                        setSlideIn("slide-in");
                    }, 100);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    return (
        <div
            className={`sticky-section-carousel`}
            style={{ height: `${(content.length) * 1}00vh` }}
            ref={sectionCarouselRef}
        >
            <div className="content" style={style}>
                <div className={`content-box ${slideIn}`}>
                    <h4>{currentText}</h4>
                    <p>{currentDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default StickySectionImages;