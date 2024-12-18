/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        MainBackground: "#1A1A1A",
        SecondaryAccent: "#B71C1C",
        PrimaryText: "#F5F5F5",
        ActiveColor: "#FF3B30",
        BorderColor: "#333333"
      }
    },
  },
  plugins: [],
}