import { Dithering } from '@paper-design/shaders-react';
import { useEffect, useState } from 'react';

export default function DitheringBackground() {
	const [dimensions, setDimensions] = useState({ width: 1280, height: 720 });
	const [isVisible, setIsVisible] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		// Check for prefers-reduced-motion
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const reducedMotion = mediaQuery.matches;
		setPrefersReducedMotion(reducedMotion);

		// Update dimensions on mount and resize
		const updateDimensions = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		updateDimensions();
		window.addEventListener('resize', updateDimensions);

		// Listen for changes to prefers-reduced-motion
		const handleChange = (e: MediaQueryListEvent) => {
			setPrefersReducedMotion(e.matches);
		};
		mediaQuery.addEventListener('change', handleChange);

		// Fade in after a short delay to allow shader to initialize (unless reduced motion)
		if (reducedMotion) {
			// Show immediately if reduced motion is preferred
			setIsVisible(true);
		} else {
			const fadeInTimer = setTimeout(() => {
				setIsVisible(true);
			}, 100);

			return () => {
				window.removeEventListener('resize', updateDimensions);
				mediaQuery.removeEventListener('change', handleChange);
				clearTimeout(fadeInTimer);
			};
		}

		return () => {
			window.removeEventListener('resize', updateDimensions);
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
				overflow: 'hidden',
				opacity: isVisible ? 1 : 0,
				transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease-in-out',
			}}
		>
			<Dithering
				width={dimensions.width}
				height={dimensions.height}
				colorBack="#000000"
				colorFront="#00214d"
				shape="simplex"
				type="2x2"
				size={2.8}
				speed={0.4}
				scale={0.6}
				fit="cover"
			/>
		</div>
	);
}
