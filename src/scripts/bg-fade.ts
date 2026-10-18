// Drives the shader background from scroll position without touching React state.
// --hero-out: 0..1 progress of the hero scrolling away, reaching 1 after 80% of its height.
// --bg-fade: 1 - hero-out, so the shader fades out as soon as scrolling starts.
// The work and contact sections have no background.
const root = document.documentElement;
const hero = document.querySelector<HTMLElement>('.hero');

const clamp = (n: number) => Math.min(1, Math.max(0, n));
let ticking = false;

const update = () => {
	ticking = false;
	if (!hero) return;

	const out = clamp(window.scrollY / (hero.offsetHeight * 0.8));
	const fade = 1 - out;

	root.style.setProperty('--hero-out', out.toFixed(3));
	root.style.setProperty('--bg-fade', fade.toFixed(3));

	// Lets the shader stop rendering while it is invisible
	root.toggleAttribute('data-bg-hidden', fade < 0.005);
	root.toggleAttribute('data-past-hero', out > 0.6);
};

const request = () => {
	if (ticking) return;
	ticking = true;
	requestAnimationFrame(update);
};

window.addEventListener('scroll', request, { passive: true });
window.addEventListener('resize', request);
update();
