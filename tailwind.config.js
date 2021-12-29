const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'src/**/*.html',
	],
	theme: {
		fontFamily: {
			'body': `'Work Sans', sans-serif`,
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus', '&:active']);
		}),
	],
};
