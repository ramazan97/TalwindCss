/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        // burada containerlerimizin şartlı ifadeye göre ekran boyutuna göre daralmasnın  gözterdik
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      // burada fontlarımızı tanımladık
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      //  burada renklerimizi tanımadık
      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },

      // burada kullanacağımız boşluğun ölçüsünğ import ettik
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
