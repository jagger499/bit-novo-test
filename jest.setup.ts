import { config } from "./config";

const mockState = {
  country: config.modals.phoneData[0],
  payment: {
    currency: config.modals.currencyData[1],
    total: "",
    description: "",
  },
  url: "",
  identifier: "",
};

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({ state: mockState }),
  useDispatch: jest.fn(),
}));

jest.mock("@/hooks/useLanguage", () => ({
  useLanguages: () => ({
    t: jest.fn((key) => key),
  }),
}));

jest.mock("@/api/order", () => ({
  createOrder: jest.fn(() => ({
    web_url: "mocked_web_url",
    identifier: "mocked_identifier",
  })),
}));

jest.mock(
  "react-native/Libraries/Components/ToastAndroid/ToastAndroid",
  () => ({
    show: jest.fn(),
  })
);
