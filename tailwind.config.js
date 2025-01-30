/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            adlam: ["ADLaM Display"],
            sora: ["Sora"],
        },

        colors: {
            pink: "#fff9f4",
            btn: "#ffdc26",
            section: "#f9df8a",
        },
      },
    },
    plugins: [],
  }