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
                red: {
                    50: '#fef2f3',
                    100: '#ffe1e3',
                    200: '#ffc8cb',
                    300: '#ffa2a7',
                    400: '#fd6c74',
                    500: '#f53e49',
                    600: '#e2202b',
                    700: '#b0151e',
                    800: '#9d171f',
                    900: '#821a20',
                },
                gray: ' #424242',
                beige: '#FFF8ED',
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
