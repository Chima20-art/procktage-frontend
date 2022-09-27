/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                red: '#B0161E',
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
