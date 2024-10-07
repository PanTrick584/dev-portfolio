import React, { useState, useEffect, useRef } from 'react';
import './styles/sideroll.scss';

interface ContentItem {
	id: number;
	text: string;
}

type TextsProps = {
	texts: ContentItem[];
}

const Sideroll: React.FC<TextsProps> = ({ texts }) => {
	const [currentPosition, setCurrentPosition] = useState<number>(0);
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current && contentRef.current) {
				const sectionTop = sectionRef.current.getBoundingClientRect().top;
				const sectionHeight = sectionRef.current.offsetHeight;
				const sectionWidth = sectionRef.current.clientWidth;
				const contentWidth = contentRef.current.scrollWidth;
				const scrollDistance = Math.max(contentWidth - sectionWidth, 0);

				// Calculate scroll ratio, and clamp it between 0 and 1
				const scrollRatio = Math.min(Math.max(-sectionTop / ((sectionHeight * .85) - window.innerHeight), 0), 1);

				// Set the current position based on scroll ratio and scroll distance
				setCurrentPosition(scrollRatio * scrollDistance);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [texts.length]);

	return (
		<div
			className="sideroll-section"
			style={{ height: `${texts.length * 100}vh` }}
			ref={sectionRef}
		>
			<div
				className="content"
				ref={contentRef}
				style={{ transform: `translateX(-${currentPosition}px)` }}
			>
				{texts.map((item, id) => (
					<div className="content-item" key={`sidescroll-${id}`}>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sideroll;
