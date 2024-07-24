// src/components/StickySection.tsx
import React, { useState, useEffect, useRef } from 'react';
import './styles/sticky-section.scss';

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
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * colors.length), colors.length -1);
                setCurrentIndex(newIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () =>   window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    return (
        <div
            className={`sticky-section`}
            ref={sectionRef}
        >
            <div className="content">
                {colors.map((color, id) => {
                    return(
                        <div className="content-box" key={id} style={{backgroundColor: `${color}`, transform: `translateX(-100%)` }}>HELLO!!!!</div>
                    )
                })}
            </div>
        </div>
    );
};

export default StickySectionImages;