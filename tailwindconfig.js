export default {
	content: [
		"./components/**/*.{vue,js,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./app.vue",
		"./app/**/*.{vue,js,ts}",
		"./error.vue",
	],
	theme: { extend: {
		colors: {
			accent: { DEFAULT: '#7dd3fc' },   // cyan-300
		}
	} },
	plugins: [],
}
