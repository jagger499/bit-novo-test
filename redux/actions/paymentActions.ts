import { SearchListItem } from "@/types/components/list";
import {
  CLEAR_PAYMENT_INFO,
  PaymentInfo,
  SET_COUNTRY,
  SET_IDENTIFIER,
  SET_PAYMENT_INFO,
  SET_URL,
} from "@/types/redux";

export const addPaymentInfo = (paymentInfo: PaymentInfo) => ({
  type: SET_PAYMENT_INFO,
  payload: paymentInfo,
});

export const setCountry = (country: SearchListItem) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const clearPaymentInfo = () => ({
  type: CLEAR_PAYMENT_INFO,
  payload: {},
});

export const setUrl = (urlInfo: { url: string }) => ({
  type: SET_URL,
  payload: urlInfo,
});

export const setIdentifier = (identifierInfo: { identifier: string }) => ({
  type: SET_IDENTIFIER,
  payload: identifierInfo,
});
