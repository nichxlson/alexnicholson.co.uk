import type { PlatformKey } from './icons';

/** browser: browser chrome around a screenshot. device: a plain phone-shaped frame. */
export type WorkFrame = 'browser' | 'device';

export type WorkMedia =
	| { type: 'image'; src: string; alt: string; width: number; height: number; frame?: WorkFrame }
	| { type: 'video'; src: string; alt: string; poster?: string; frame?: WorkFrame }
	| { type: 'placeholder'; label: string; alt: string; frame?: WorkFrame };

export interface WorkStep {
	heading: string;
	body: string;
	/** Omit to keep the previous step's media pinned while this text scrolls past */
	media?: WorkMedia;
}

export interface WorkItem {
	slug: string;
	title: string;
	/** Shown as white brand marks under the title */
	platforms: PlatformKey[];
	summary: string;
	awards?: string[];
	/** Each step scrolls past in the right column; its media is shown, pinned, while it is in view. */
	steps: WorkStep[];
}

// Jonite and Blanca screenshots are all 1800x1125 (16:10), captured from the live sites.
const shot = (src: string, alt: string): WorkMedia => ({
	type: 'image',
	src,
	alt,
	width: 1800,
	height: 1125,
	frame: 'browser',
});

export const work: WorkItem[] = [
	{
		slug: 'jonite',
		title: 'Jonite',
		platforms: ['craftcms', 'shopify'],
		summary:
			'A large Craft CMS build for breeze block maker Jonite, recognised by Awwwards with Site of the Day and the Developer Award.',
		awards: ['Awwwards Site of the Day', 'Awwwards Developer Award'],
		steps: [
			{
				heading: 'Craft at scale',
				body: 'A marketing site and a shop run from one Craft CMS install, with flexible page-builder content for each type of page. GSAP drives the animation and scroll-based interactions, and Blitz static caching keeps it fast.',
				media: shot('/work/jonite/home.webp', 'The Jonite homepage, with the headline "Decorative stone grating for modern urban living" above links to projects, the shop and products'),
			},
			{
				heading: 'Enquiries into the ERP',
				body: 'A custom Formie integration sends form submissions straight into Odoo ERP, so enquiries land where the team already works.',
				media: shot('/work/jonite/contact.webp', 'The Jonite contact form, with fields for name, email, phone, country, company and message'),
			},
			{
				heading: 'Headless Shopify, inside Craft',
				body: 'Products sync from Shopify into Craft so content can sit around them. A headless cart built on the Storefront API prices every region, then hands over to Shopify checkout.',
				media: shot('/work/jonite/cart.webp', 'The Jonite cart, summarising an order for a breeze block with a button to proceed to checkout'),
			},
			{
				heading: 'The visualiser',
				body: 'Customers enter their wall and block dimensions and the tool builds a configurable grid. They choose products, drag-select to paint or replace blocks, and rotate and flip patterns until the wall looks right.',
				media: shot('/work/jonite/visualiser.webp', 'The Jonite visualiser, showing a wall of Tessera breeze blocks beside controls for wall size, collection and colour, with a running total of blocks and price'),
			},
			{
				heading: 'Built for real walls',
				body: 'Dimensions work in metric or imperial. When a wall needs a partial block on its last row, the tool says so and suggests adjusting the size to use full blocks only.',
				media: shot('/work/jonite/visualiser-sizes.webp', 'The visualiser warning that the wall height needs a partial block on the last row'),
			},
			{
				heading: 'Save, share, buy',
				body: 'Designs save without an account and come with a link to edit or view them, and they can be emailed to a friend or client. The block counts go straight into the Shopify cart, connecting the design to a purchase.',
				media: shot('/work/jonite/order-summary.webp', "The visualiser's order summary, listing the blocks needed for the design with a total price"),
			},
		],
	},
	{
		slug: 'blanca-padel',
		title: 'Blanca Padel',
		platforms: ['shopify'],
		summary:
			'A custom Shopify storefront for a padel brand, with product data and page content modelled in metafields and metaobjects.',
		awards: ['Awwwards Honorable Mention', 'Awwwards Ecommerce Honors nominee'],
		steps: [
			{
				heading: 'Content-driven commerce',
				body: 'Product features, bundles and FAQs are all modelled in metafields and metaobjects, and the theme is custom Liquid built with Alpine.js and Tailwind.',
				media: shot('/work/blanca-padel/product.webp', 'A Blanca padel racquet product page, with the racquet, a grid of specifications and an add to cart button'),
			},
			{
				heading: 'Finding the right racket',
				body: 'A quiz asks about experience, playing style and routine, then recommends products using simple rules. Visitors can leave their email at the end to sign up through Klaviyo.',
				media: shot('/work/blanca-padel/quiz.webp', 'The Blanca racquet quiz, asking how long the player has been enjoying padel, with one answer selected'),
			},
			{
				heading: 'Find a club',
				body: 'A location finder built on Mapbox and Shopify metaobjects, with map and list views and a search radius around the visitor.',
				media: shot('/work/blanca-padel/club-finder.webp', 'The Blanca club finder, with a map of locations beside a searchable list of clubs'),
			},
			{
				heading: 'A lighter cart',
				body: 'The cart updates without leaving the page, restores instantly from the browser session, and suggests related products using Shopify recommendations.',
				media: shot('/work/blanca-padel/cart.webp', 'The product added to cart panel, with buttons to go to the cart or continue shopping'),
			},
		],
	},
	{
		slug: 'weatherbys-hamilton',
		title: 'Weatherbys Hamilton',
		platforms: ['android', 'laravel'],
		summary: 'A native Android app for customers, and the Laravel CMS and API behind it.',
		steps: [
			{
				heading: 'Android, from scratch',
				body: 'Built without any prior Android experience. Customers sign in with a password or their fingerprint.',
				media: { type: 'image', src: '/work/weatherbys-hamilton/app-login.webp', alt: 'The app sign in screen, with fields for email address and password', width: 720, height: 1280, frame: 'device' },
			},
			{
				heading: 'Policies at a glance',
				body: 'Customers see their policies grouped by type, can find their nearest branch and get in touch in a tap, and get reminders before a policy renews.',
				media: { type: 'image', src: '/work/weatherbys-hamilton/app-dashboard.webp', alt: 'The app dashboard, listing categories of insurance including property, motor and equine', width: 720, height: 1280, frame: 'device' },
			},
			{
				heading: 'The CMS behind it',
				body: 'A Laravel CMS lets account executives create, edit, delete and import customer policies and information, without needing a developer to make a change.',
				media: { type: 'image', src: '/work/weatherbys-hamilton/cms-settings.webp', alt: 'The CMS settings page, listing the terms of business and policyholder information documents', width: 1600, height: 900, frame: 'browser' },
			},
			{
				heading: 'One API, two apps',
				body: 'The same Laravel API serves the Android app and the iOS app, which was built by an external developer, so both apps always show the same information.',
			},
		],
	},
];
