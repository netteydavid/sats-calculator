/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif']
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'navy': '#020A50',
        'orange': '#FF932B'
    },
    extend: {

    },
  },
  plugins: [],
}

