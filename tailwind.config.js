const colors = require("tailwindcss/colors");
console.log({ colors });
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                // Remove the "gray" colors from the theme.
                gray: {},
                grey: {
                    ...colors["coolGray"],
                },
            },
        },
    },
    plugins: [],

    darkMode: "class",
};
