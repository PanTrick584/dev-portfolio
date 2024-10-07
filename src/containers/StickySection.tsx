import React, { useState, useEffect, useRef } from 'react';
import './styles/sticky-section.scss';
import { ContentItem } from '../types/types';


type TextsProps = {
    texts: ContentItem[];
}

const StickySection: React.FC<TextsProps> = ({ texts }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [show, setShow] = useState<boolean>(true);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.clientHeight;

                const totalScrollableHeight = sectionHeight - window.innerHeight
                const scrollRatio = Math.min(Math.max(-sectionTop / (totalScrollableHeight * .85), 0), 1);

                const newIndex = Math.min(Math.floor(scrollRatio * texts.length), texts.length - 1);

                if (newIndex !== currentIndex) {
                    setShow(false);
                    setTimeout(() => {
                        setCurrentIndex(newIndex);
                        setShow(true);
                    }, 300);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentIndex, texts.length]);

    return (
        <div
            className={`sticky-section`}
            style={{ height: `${texts.length * 120}vh` }}
            ref={sectionRef}
        >
            <div className={`content`}>
                <p className={`content-text ${show ? 'show' : ''}`}>{texts[currentIndex].text}</p>
            </div>
        </div>
    );
};

export default StickySection;
