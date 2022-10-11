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
                grey: {
                    50: '#f7f7f7',
                    100: '#F5F5F5',
                    200: '#c8c8c8',
                    300: '#a4a4a4',
                    400: '#818181',
                    500: '#666666',
                    600: '#515151',
                    700: '#424242',
                    800: '#383838',
                    900: '#313131',
                },
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
