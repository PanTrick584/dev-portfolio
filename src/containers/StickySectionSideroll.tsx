import React, { useState, useEffect, useRef } from 'react';
import './styles/sideroll.scss';

interface ContentItem {
    id: number;
    text: string;
}

type TextsProps = {
    texts: ContentItem[]
}

const StickySectionSideroll: React.FC<TextsProps> = ({texts}) => {
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.clientHeight;
                const scrollRatio = Math.min(Math.max(-sectionTop / sectionHeight, 0), 1);
                const newIndex = Math.min(Math.floor(scrollRatio * texts.length), texts.length -1);
                // console.log(scrollRatio);
                // console.log(newIndex);
                
                setCurrentPosition(scrollRatio * (texts.length * 1000));
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () =>   window.removeEventListener('scroll', handleScroll);
    }, [currentPosition]);

    return (
        <div
            className={`sideroll-section`}
            style={{height: `${texts.length * 2}00vh`}}
            ref={sectionRef}
        >

            <div
                className="content"
                style={{transform: `translateX(-${currentPosition}px)`}}>
                                <div
                className="content-background"
                style={{transform: `translateX(${currentPosition}px)`}}>
            </div>
                    {texts.map((item) => {
                        return(
                            <div className="content-item">
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default StickySectionSideroll;