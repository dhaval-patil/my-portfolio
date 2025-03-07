/** @type {import{'tailwindcss'}.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'background-gradient': 'background-gradient var(--background-gradient-speed, 15s) cubic-bezier(.445,.05,.55,.95) infinite',
      },
      keyframes: {
        'background-gradient': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10%, 10%)' },
        },
      },
      

      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #f4a44f, #ac573f)",
      },
    },
  },
};
