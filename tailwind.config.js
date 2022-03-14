module.exports = {
  content: [
    "./index.html",
    "./src/script.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        lightBig: "url('../images/bg-desktop-light.jpg')",
        darkBig: "url('../images/bg-desktop-dark.jpg')",
        lightSmall: "url('../images/bg-mobile-light.jpg')",
        darkSmall: "url('../images/bg-mobile-dark.jpg')"
      },
      fontFamily:{
        main : ['"Josefin Sans"']
      },
      colors:{
        brightBlue : "hsl(220, 98%, 61%)",
        gradientStart:"hsl(192, 100%, 67%)",
        gradientEnd: "hsl(280, 87%, 65%)",
        light:{
          veryLightGray: "hsl(0, 0%, 98%)",
          veryLightGrayishBlue: "hsl(236, 33%, 92%)",
          lightGrayishBlue: "hsl(233, 11%, 84%)",
          darkGrayishBlue: "hsl(236, 9%, 61%)",
          veryDarkGrayishBlue: "hsl(235, 19%, 35%)"
        },
        dark:{
          veryDarkBlue: "hsl(235, 21%, 11%)",
          veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          lightGrayishBlue: "hsl(234, 39%, 85%)",
          lightGrayishBlueHover: "hsl(236, 33%, 92%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlueOne: "hsl(233, 14%, 35%)",
          veryDarkGrayishBlueTwo: "hsl(237, 14%, 26%)"
        }
      },
      
    },
  },
  plugins: [],
}
