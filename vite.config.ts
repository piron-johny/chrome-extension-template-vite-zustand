// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import manifest from './manifest';
import makeManifest from './utils/plugins/make-manifest';

const isDev = process.env.NODE_ENV === 'development';
console.log('isDev MODE: ', isDev);

export default defineConfig({
	plugins: isDev
		? [react()]
		: [
				react(),
				makeManifest(manifest, {
					isDev,
					contentScriptCssKey: regenerateCacheInvalidationKey(),
				}),
		  ],
	build: isDev
		? {}
		: {
				minify: true,
				reportCompressedSize: true,
				rollupOptions: {
					input: {
						// main: resolve(__dirname, 'src/index.tsx'),
						content: resolve(__dirname, 'src/content/index.ts'),
						contentStyle: resolve(__dirname, 'src/content/style.css'),
						popup: resolve(__dirname, 'src/popup/index.html'),
						background: resolve(__dirname, 'src/background/index.ts'),
					},
					output: {
						entryFileNames: 'src/[name]/index.js',
						chunkFileNames: 'assets/js/[name].[hash].js',
						assetFileNames: (assetInfo) => {
							const { dir, name } = path.parse(assetInfo.name);
							console.log('dir: ', dir);
							console.log('_name: ', name);
							// const assetFolder = dir.split('/').at(-1);
							// const name = assetFolder + firstUpperCase(_name);
							if (name === 'style') {
								return `assets/css/contentStyle.${cacheInvalidationKey}.chunk.css`;
							}
							return `assets/[ext]/${name}.chunk.[ext]`;
						},
					},
				},
		  },
	optimizeDeps: isDev
		? {}
		: {
				exclude: ['react', 'react-dom'],
		  },
});

function firstUpperCase(str) {
	const firstAlphabet = new RegExp(/( |^)[a-z]/, 'g');
	return str.toLowerCase().replace(firstAlphabet, (L) => L.toUpperCase());
}

let cacheInvalidationKey = generateKey();
function regenerateCacheInvalidationKey() {
	cacheInvalidationKey = generateKey();
	return cacheInvalidationKey;
}

function generateKey() {
	return `${(Date.now() / 100).toFixed()}`;
}
