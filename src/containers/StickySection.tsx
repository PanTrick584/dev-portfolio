// src/components/StickySection.tsx
import React, { useState, useEffect, useRef } from 'react';
import './styles/sticky-section.scss';

interface ContentItem {
    id: number;
    text: string;
}

const contentList: ContentItem[] = [
    { id: 1, text: 'Hejka' },
    { id: 2, text: 'Te sekcje' },
    { id: 3, text: 'Powinny się fajnie wyświetlać' },
    { id: 4, text: 'dotąd jest ok' },
    { id: 5, text: 'i aż do końca!' },
    { id: 6, text: 'i aż do końca!' },
];

const StickySection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * contentList.length), contentList.length -1);
                setCurrentIndex(newIndex);
                //set up logic to force stop at the beggining of sticky section on mobile || EXAMPLE CODE
                // <div className={isModalOpen ? 'disable-touch-scroll' : ''}> for this css option
                // function disableScroll() {
                //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                //     const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                  
                //     window.onscroll = function() {
                //       window.scrollTo(scrollLeft, scrollTop);
                //     };
                //   }
                // function enableScroll() {
                //     window.onscroll = function() {};
                //   }
                // useEffect(() => {
                //     if (isModalOpen) {
                //       disableScroll();
                //     } else {
                //       enableScroll();
                //     }
                
                //     const handleWindowWheel = (event: WheelEvent) => {
                //       if (isModalOpen){
                //         event.preventDefault();
                //       }
                //     };
                    
                //     window.addEventListener('wheel', handleWindowWheel, { passive: false });
                    
                //     return () => {
                //       window.removeEventListener('wheel', handleWindowWheel);
                //     };
                //   }, [isModalOpen]);
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
                <p>{contentList[currentIndex].text}</p>
            </div>
        </div>
    );
};

export default StickySection;