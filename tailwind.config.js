/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/flowbite-react/**/*.js',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                red: '#B0161E',
                gray: ' #424242',
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
