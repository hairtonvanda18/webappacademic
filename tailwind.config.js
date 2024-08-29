/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        aside: "256px",
        'aside-hidden': "77px"
      },
      height: {
        content: "calc(100vh - 110px)"
      },
      opacity: {
        '67': '.67',
      },
      colors: {
        background: {
          'background': "#FAFAFA",
          'input': "#F7F7F7"
        },
        primary: "#2E3361",
        text: {
          "800": "#4E4E4E",
          "700": "#707070",
          "600": "#757575"
        },
        border: {
          primary: "#E6E7EC",
          secundary: "#E3E3E3"
        },
        card: {
          body: '#F5F5F5',
          header: '#F5F5F5'
        },
        'red-0': '#D9534F',
        'green-0': '08875D'
      },
      boxShadow: {
        login: "0px 3px 80px 0px rgba(46, 51, 97, 0.05)",
      },
      dropShadow:{
        processdetail:"0px 2px 13px rgba(0, 0, 0, 0.06)",
      }
    },
  },
  plugins: [],
}

