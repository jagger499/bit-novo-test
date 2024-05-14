const currencyPath = '@/assets/svg/Modals/Currency/';
const countryPath = '@/assets/svg/Modals/Country/';

export const config = {
  modals: {
    currencyData: [
      {
        key: "1",
        selected: true,
        title: "Euro",
        subTitle: "EUR",
        image: require(currencyPath + "EuroFlag.svg"),
        exchangeRate: 1
      },
      {
        key: "2",
        title: "Dólar Estadounidense",
        subTitle: "USD",
        image: require(currencyPath + "EuFlag.svg"),
        exchangeRate: 0.93
      },
      {
        key: "3",
        title: "Libra Esterlina",
        subTitle: "GBP",
        image: require("@/assets/svg/UkFlag.svg"),
        exchangeRate: 0.8
      },
    ],
    phoneData: [
      {
        key: "1",
        title: "+34",
        subTitle: "España",
        image: require(countryPath + "SpainFlag.svg"),
      },
      {
        key: "2",
        title: "+240",
        subTitle: "Equatorial Guinea",
        image: require(countryPath + "GuineaFlag.svg"),
      },
      {
        key: "3",
        title: "+30",
        subTitle: "Grecia",
        image: require(countryPath + "GregFlag.svg"),
      },
      {
        key: "4",
        title: "+500",
        subTitle: "South Georgia and the S...",
        image: require("@/assets/svg/UkFlag.svg"),
      },
      {
        key: "5",
        title: "+502",
        subTitle: "Guatemala",
        image: require(countryPath + "GuatemalaFlag.svg"),
      },
      {
        key: "6",
        title: "+592",
        subTitle: "Guyana",
        image: require(countryPath + "GuyanaFlag.svg"),
      },
      {
        key: "7",
        title: "+852",
        subTitle: "Hong Kong",
        image: require(countryPath + "HongKongFlag.svg"),
      },
      {
        key: "8",
        title: "+504",
        subTitle: "Honduras",
        image: require(countryPath + "HondurasFlag.svg"),
      },
    ],
  },
};
