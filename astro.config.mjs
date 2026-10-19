// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	build: {
		// One page, ~11 KB of CSS: inlining it saves a blocking request before first paint
		inlineStylesheets: 'always',
	},
});
