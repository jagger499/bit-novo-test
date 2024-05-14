import { PaymentActionTypes, PaymentState } from "@/types/redux";
import {
  CLEAR_PAYMENT_INFO,
  SET_COUNTRY,
  SET_IDENTIFIER,
  SET_PAYMENT_INFO,
  SET_URL,
} from "../actions/paymentActions";
import { config } from "@/config";

const initialState: PaymentState = {
  country: config.modals.phoneData[0],
  payment: {
    currency: config.modals.currencyData[1],
    total: "",
    description: "",
  },
  url: "",
  identifier: ""
};

const paymentReducer = (
  state = initialState,
  action: PaymentActionTypes
): PaymentState => {
  switch (action.type) {
    case SET_PAYMENT_INFO:
      console.log("return", action);
      return {
        ...state,
        payment: { ...state.payment, ...action.payload },
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      }
    case SET_URL:
      return {
        ...state,
        url: action.payload.url,
      };
    case SET_IDENTIFIER:
      return {
        ...state,
        identifier: action.payload.identifier,
      };
    case CLEAR_PAYMENT_INFO:
      return {
        ...state,
        payment: {
          currency: config.modals.currencyData[1],
          total: "",
          description: "",
        },
      };
    default:
      return state;
  }
};

export default paymentReducer;
