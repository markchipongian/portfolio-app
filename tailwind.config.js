/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'], // Primary sans-serif
                serif: ['Playfair Display', 'Merriweather', 'serif'], // Elegant serif
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'], // Monospace
            },
        },
    },
    plugins: [],
};
