/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-digital-blue": "#000C24",
                "medium-digital-blue": "#031239",
                "light-digital-blue": "#3F9DCE",
                "digital-red": "#CE3F3F",
                "digital-green": "#3B992C",
                "neon-green": "#00FF38",
            },
            borderWidth: {
                3: "3px",
            },
            fontFamily: {
              "body": ["Inconsolata"],
            }
        },
    },
    plugins: [],
};
