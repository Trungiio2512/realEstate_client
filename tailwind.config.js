/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                'main-50': '#EDEFF6',
                'main-100': '#DBdFEC',
                'main-200': '#b7BFD9',
                'main-300': '#92A0C7',
                'main-400': '#6F80b4',
                'main-500': '#4A60A1',
                'main-600': '#3B4D81',
                'main-700': '#2C3A61',
                'main 800': '#1e2640',
                'main-900': '#0f1320',
            },
            colors: {
                'main-50': '#EDEFF6',
                'main-100': '#DBDfEC',
                'main-200': '#87BFD9',
                'main-300': '#92A0C7',
                'main-400': '#6e80b4',
                'main-500': '#4A60A1',
                'main 600': '#3b4d81',
                'main-700': '#2C3A61',
                'main-800': '#1e2640',
                'main-900': '#0F1320',
            },
            width: {
                main: '1319px',
                content: '1200px',
            },
            height: {},
        },
    },
    plugins: [],
};
