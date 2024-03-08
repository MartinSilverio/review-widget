/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'img-offset': '.5rem -.3rem',
            },
            fontFamily: {
                robo: 'Roboto Mono, monospace',
            },
        },
    },
    plugins: [],
};
