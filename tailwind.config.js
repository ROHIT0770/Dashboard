/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1200px",
        xxsm: "350px",
        xxs: "390px",
        xsm: "460px",
        xlg: "1000px",
        xxlg: "1800px",
        xxxlg: "2000px",
      },
      /** ------------------------------------------------------------
       *
       * backgroundSize
       *
       * ------------------------------------------------------------
       */
      backgroundSize: {
        "100%": "100% 100%",
      },
      /** ------------------------------------------------------------
       *
       * Height
       *
       * ------------------------------------------------------------
       */


      height: {
      

        90:"22.5rem" /* 360px */,
        17.75: "4.375rem" /* 70px */,
        22.5: "5.625rem" /* 90px */,
        23: "5.75rem" /* 92px */,
        42: "11.375rem" /*182px */,
        522: "522px",
        578: "578px",
        57: "14.25rem" /*228px*/,
        "screen-7/10": "70vh",
        "screen-4/5": "80vh",
        "screen-83": "83vh",
        "screen-62": "62vh",
        "73/100": "73%",
        "19/20": "95%",

        86: "21.5rem" /* 344px */,
        165: "10.3125rem" /* 165px */,
        "screen-9/10": "90vh",
        "screen-1/2": "50vh",
        448: "28rem",
        340: "21.25rem",
        "screen-67": "67vh",
        "screen-60": "60vh",
        "screen-49": "49vh",
        "screen-74": "74vh",
        "screen-66": "66vh",
        "screen-63": "63vh",
        "screen-68": "68vh",
        "screen-70": "70vh",
        "screen-77": "77vh",
        "screen-80": "80vh",
        "screen-95": "95vh",

        15: "3.75rem" /* 60px */,
        8.5: "2.125rem" /* 34px */,
        13: "3.25rem" /* 52px */,
        43.25: "10.8125rem" /* 173 */,
        16.5: "4.125rem" /*66px*/,
        30:"7.5rem" /* 120px*/,
        68:"17rem"/*272px*/
      },

      maxHeight: {
        25: "7rem" /* 112px */,
        "19/20": "95%",
      },
      minHeight: {
        25: "7rem" /* 112px */,
        20: "5rem",
      },
      /** ------------------------------------------------------------
       *
       * Maximum Width
       *
       * ------------------------------------------------------------
       */
      maxWidth: {
        12: "3rem" /* 48px */,
        25: "7rem" /* 112px */,
        "1/2": "50%",
      },
      /** ------------------------------------------------------------
       *
       * Minimum Width
       *
       * ------------------------------------------------------------
       */
      minWidth: {
        12: "3rem",
        32: "8rem" /* 128px */,
        25: "7rem" /* 112px */,
        "1/2": "50%",
        "2/3": "66%",
      },
      /** ------------------------------------------------------------
       *
       * Width
       *
       * ------------------------------------------------------------
       */
      width: {
        25: "6.25rem",
        22.5: "5.625rem" /* 90px */,
        147: "39rem" /* 624px */,
        58: "14.5rem" /*232px */,
        45:"11.25rem"/*180px*/,
        578: "578px",
        "1.5/12": "12.5%",
        "7/20": "35%",
        "5.5/12": "45.833333%",
        "6.25/12": "52.083333%",
        "6.5/12": "54.166667%",
        "8.5/12": "70.833333%",
        "64/100": "64%",
        "8.75/12": "72.916667%",
        "10.5/12": "87.5%",
        "9/10": "90%",
        "85/100": "85%",
        "885/1000": "88.5%",
        "93/100": "93%",
        "95/100": "95%",
        "98/100": "98%",
        "56/100": "56%",
        15: "3.75rem" /* 60px */,
        "79/100": "79%",
        "81/100": "81%",
        38: "9.5rem" /*152px*/,
        16.5: "4.125rem" /*66px*/,
        120:"30rem" /* 480px */,
        125:"31.25rem" /* 500px */,
        "7/10": "70%",
        "3/10": "30%",



      },

      /** ------------------------------------------------------------
       *
       * Spacing [Top - Left - Right - Bottom ]
       *
       * ------------------------------------------------------------
       */
      spacing: {
        "7/20": "35%",
        "17/20": "85%",
      },
      /** ------------------------------------------------------------
       *
       * Font Size
       *
       * ------------------------------------------------------------
       */
      fontSize: {
        xxsm: "0.563rem" /* 09px */,
        xxxs: "0.625rem" /* 10px */,
        xxs: "0.6875rem" /* 11px */,
        tiny: "0.8125rem" /* 13px */,
        md: "0.9375rem" /* 15px */,
        "0.5xl": "1.1875rem" /* 19px */,
        "1.5xl": "1.375rem" /* 22px */,
        "3.5xl": "2rem" /* 32px */,
        "3.75xl": "2.09375rem" /* 33.5px */,
        "4.25xl": "2.5rem" /*40px*/,
        "4.5xl": "2.875rem" /* 46px */,
        "5.5xl": "3.5rem" /* 56px */,
        "6.1xl": "4rem" /* 64px */,
      },

      /** ------------------------------------------------------------
       *
       * Line Height
       *
       * ------------------------------------------------------------
       */
      lineHeight: {
        14: "3.5rem" /* 56px */,
        17: "1.1rem" /*17.57*/,
        13: "3.1rem" /*51*/,
      },
      /** ------------------------------------------------------------
       *
       * Font Family
       *
       * ------------------------------------------------------------
       */
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
      /** ------------------------------------------------------------
       *
       * Transition Property
       *
       * ------------------------------------------------------------
       */
      transitionProperty: {
        width: "width",
        margin: "margin",
      },
      /** ------------------------------------------------------------
       *
       * Border Width
       *
       * ------------------------------------------------------------
       */
      borderWidth: {
        0.3: "0.3px",
        20: "20px",
        16: "16px",
        22: "22px",
        12: "12px",
        1: "1px",
        0.6: "0.64px",
        1.5: "1.5px",
      },
      /** ------------------------------------------------------------
       *
       * Border Radius
       *
       * ------------------------------------------------------------
       */
      borderRadius: {
        xlg: "10px",
        "2.5xl": "20px",
        xxlg: "30px",
        x:"1px"

      },
      /** ------------------------------------------------------------
       *
       * Margin
       *
       * ------------------------------------------------------------
       */
      margin: {
        2.5: "0.6rem",
        5.5: "1.375rem" /* 22px */,
        7.5: "1.875rem" /* 30px */,
        9.5: "2.375rem" /* 38px */,
        18: "4.5rem" /* 72px */,
        15: "3.75rem" /* 60px */,
        50: "12.5rem" /* 200px */,
        13: "3.2rem" /* 51px */,
        8.5: "2.125rem" /* 34px */,
        19.5: "4.82rem" /* 77px */,
        22.25: "5.56rem" /* 89px */,
        25.75: "6.4375" /* 103px */,
        11.5: "2.875rem" /* 46px*/,
      },
      /** ------------------------------------------------------------
       *
       * Padding
       *
       * ------------------------------------------------------------
       */
      padding: {
        150: "45rem",
      },
      /** ------------------------------------------------------------
       *
       * Box Shadow
       *
       * ------------------------------------------------------------
       */
      boxShadow: {
        product: "0 0px 12px 2px rgba(48, 57, 90, 0.19)",
        team: "0px 2px 10px rgba(36, 68, 117, 0.08)",
        editButton: "1px 2px 8px rgba(40, 26, 26, 0.25)",
        base: "0px 2px 10px rgba(36, 68, 117, 0.08)",
        leftPanel: "0px 2px 6px rgba(0, 0, 0, 0.247323)",
        campaign: "1px 2px 2px rgba(0, 0, 0, 0.224131)",
        select: "0px 2px 6px rgba(0, 0, 0, 0.146061)",
        panalHeader: "0px 2px 6px rgba(0, 0, 0, 0.146061)",
        category: "2px 2px 4px 1px rgba(39, 34, 98, 0.220908)",
        navbar_darkShadow: "0px 4px 9px rgba(63, 67, 79, 0.11)",
        c1: "0 2px 4px rgba(0, 0, 0, 0.5)",
        subscription: "0px 2px 18px rgba(130, 130, 130, 0.25)",
        profileCard: "0px 4px 4px rgba(0, 0, 0, 0.25);"
      },
      /** ------------------------------------------------------------
       *
       * Z Index
       *
       * ------------------------------------------------------------
       */
      zIndex: {
        1: "1",
        51: "51",
      },
      /** ------------------------------------------------------------
       *
       * Background Image
       *
       * ------------------------------------------------------------
       */
      backgroundImage: {

      
   
      },
      inset: {
        38: "38px",
      },
      /** ------------------------------------------------------------
       *
       * Colors
       *
       * ------------------------------------------------------------
       */
      colors: {
        darkGrey:"#555555"
        ,

        amber: {
          600: "#DE4313",
          700: "#DE4414",
          800: "#DF4515",
          900: "#DF4816",
          1000: "#E04B18",
          1100: "#E1501B",
          1200: "#E3561F",
          1300: "#E55E24",
          1400: "#E7682B",
          1500: "#EB7533",
          1600: "#EE843C",
          1700: "#F39547",
          1800: "#F8A954",
          1900: "#FEC163",
        },
        lightred:"#EFDADA",
        lightpurple:"#6972C3",
        lightgreen:"#9BDD7C",
        texts:"#858585",
        Card4blue: "#DEE0EF",
        Card3Pink: "#EFDADA",
       Card2Pink: "#F4ECDD",
        Card1:"#DDEFE0",
        lightBlue:"#346BD4",
        lightSilver: "#D9D9D9",
        greyL:"858585",
        carbonGray: "#5B5B5B",
        codGray: "#131313",
        Wewak: "#F28C96",
        monza: "#CB0736",
        MineShaft: "#252525",
        whisper: { DEFAULT: "#EBEBEB", 1: "#EEEEEE" },
        black: "#000000",
        lightBlack: "#1C1C1C",
        charcoal: "#434343",
        charcoal2: "#474747",
        crimson: "#CB0736",
        darkGray: "#A6A6A6",
        eclipse: { 1: "#3E3E3E", 2: "#383838", 3: "#3B3B3B", 4: "#404040" },
        snow: { 1: "#FAFAFA", 2: "#F9F9F9" },
        pinkSwan: "#B4B4B4",
        gorse: "FFDD2D",
        whisper: "#ECECEC",
        matterhorn: { 1: "#4B4B4B", 2: "#575757", 3: "#4d4d4d", 4: "#535353" },
        gainsboro: "#DCDCDC",
        nero: "#252525",
        veryLightGrey: "#C8C8C8",
        white: "#FFFFFF",
        whiteSmoke: "#F2F2F2",
        persianGreen: "#00a693",
        gainsboro: "#DDDDDD",
        tuna: "#3a3a45",
        charcoal: { 1: "#444444", 2: "#414141" },
        chateauGreen: "#43A959",
        zambezi: "#585858",
        ghostWhite: { 1: "#F3F3F4", 2: "#F4F4F6" },
        malachite: "#1ECD64",
        nobel: "#9E9E9E",
        santasGrey: "#9595A1",
        arsenic: "#394752",
        dimGray: "#626262",
        slateGrey: "#757F88",
        resolutionBlue: "#244475",
        pacificBlue: "#0988CC",
        darkPastelGreen: "#00B929",
        fireBush: "#E49343",
        salem: "#178751",
        persianGreen: "#00A89A",
        blueViolet: "#913DFB",
        aliceBlue: { 1: "#F6F8FB", 2: "#FAFCFD" },
        blackPearl: { 1: "#0E1C25", 2: "#121619", 3: "#0C0C0C" },
        pattensBlue: "#DBE3EB",
        silver: { DEFAULT: "#C4C4C4", 1: "#BFBFBF" },
        royalBlue: "#225DF4",
        malibu: "#59B1E0",
        coralRed: "#FF4242",
        nobel: "#A1A1A1",
        sealBrown: "#131313",
        nightRider: { DEFAULT: "#2B2B2B", 1: "#2F2F2F" },
        black: { DEFAULT: "#000000", 1: "#0A0A0A" },
        suvaGrey: "#898989",
        mediumSeaGreen: "#26C465",
        Gray25: "#404040",
        whiteWatermelon: "#FF5675",
        gunPowder: "#57575C",
        AeDark: "#1C1C1C",
        echoBlue: "#B6BBC6",
        lightGrey: "#D0D0D0",
        lightSilver: "#C2C2C2",
        stealGray: "#393939",
        darkTangerine: "#FC9512",
        wildWatermelon: "#F45A79",
        spunPearl: "#B0B0B7",
        grey: "#828282",
        wewak: "#F28C96",
        admin: {
          primary: "#CB0736",
          secondary: "#252525",
          dark: "#1C1C1C",
          white: "#FFFFFF",
          nightRider: "#353535",
          gainsboro: { DEFAULT: "#DCDCDC", 1: "#D8D8D8" },
          whisper: { DEFAULT: "#E6E6E6", 1: "#EAEAEA" },
          pattensBlue: "#DBE3EB",
          aliceBlue: { 1: "#F6F8FB", 2: "#FAFCFD" },
          bilbao: "#318210",
          pacificBlue: "#0088CC",
          charcoal: "#444444",
          matterhorn: { 1: "#4B4B4B", 2: "#575757" },
          veryLightGrey: "#C8C8C8",
          lightGrey: "#D2D2D2",
          black: { DEFAULT: "#000000", 1: "#0A0A0A" },
          kingfisherDaisy: "#563D7C",
          silver: "#BCBCBC",
          martinique: "#3D3C40",
          eclipse: { DEFAULT: "#383838", 1: "#3E3E3E" },
          nobel: {
            DEFAULT: "#999999",
            1: "#969696",
          },
          whiteSmokeLight: "#F5F5F5",
          whiteSmoke: { 1: "#F3F3F3" },
          santasGrey: "#9595A1",
          blackPearl: "#121619",
          slateGrey: "#757F88",
          crimson: "#CB0736",
          nero: "#252525",
          whiteSmoke_1: "#F8F8F8",
          PersianRed: "#D32F2F",
          zambezi: "#585858",
          persianGreen: "#00A89A",
          InternationalOrange: "#CE1B03",
          mediumSeaGreen: "#26C465",
          nero: "#252525",
        },
        wildWatermelon: "#FF5675",
      },
      padding: {
        150: "45rem",
        18.75: "4.6875rem" /*75px */,
        15: "3.75rem" /*60px */,
        4.5: "1.125rem" /*18px */,
        16.25: "4.0625rem" /*65px */,
        7.25: "1.8125rem" /*29px */,
        23: "5.75rem" /*92px*/,
        7.5: "1.875rem" /*30px */,
        5.5: "1.375rem" /* 22px */,
        0.375: "0.09375rem" /* 1.5px */,
      },
    },
  },
}