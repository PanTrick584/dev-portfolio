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
    // { id: 6, text: 'i aż do końca!' },
];

const StickySection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [show, setShow] = useState('show');
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach(entry => {
        //             if (entry.isIntersecting) {
        //                 // If the sticky section is in view, start observing the content changes
        //                 window.addEventListener('scroll', handleScroll);
        //             } else {
        //                 // If the sticky section is not in view, stop observing the content changes
        //                 window.removeEventListener('scroll', handleScroll);
        //             }
        //         });
        //     }, { threshold: [0.5] });
        //     console.log(sectionRef.current);
        //     if (sectionRef.current) observer.observe(sectionRef.current)
            
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * contentList.length), contentList.length -1);
                // console.log(sectionTop);
                // console.log(sectionHeight);
                // console.log(scrollRatio);
                setShow("");
                        // setShow("slide-in")
                setTimeout(() => setShow("show"), 100);
                // setShow("show");
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

        // const handleScroll = () => {
        //     const stickySection = stickySectionRef.current;
        //     const windowHeight = window.innerHeight;
        //     const stickyRect = stickySection.getBoundingClientRect();
        //     const scrollPosition = window.scrollY + windowHeight;
        //     const stickyStart = stickySection.offsetTop;
        //     const stickyEnd = stickyStart + stickySection.offsetHeight;
        //     const scrollRange = stickyEnd - stickyStart - windowHeight;

        //     const progress = (scrollPosition - stickyStart) / scrollRange;
        //     const newIndex = Math.min(contentRefs.current.length - 1, Math.floor(progress * contentRefs.current.length));

        //     setActiveIndex(newIndex);
        // };

        window.addEventListener('scroll', handleScroll);
        return () =>   window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    return (
        <div
            className={`sticky-section`}
            style={{height: `${contentList.length * 2}00vh`}}
            ref={sectionRef}
        >
            <div className="content">
                <p className={`content-text ${show}`}>{contentList[currentIndex].text}</p>
            </div>
        </div>
    );
};

export default StickySection;