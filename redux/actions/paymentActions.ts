import { SearchListItem, SearchListProps } from "@/types/components/list";
import { PaymentInfo } from "@/types/redux";

export const SET_URL = "SET_URL";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_IDENTIFIER = "SET_IDENTIFIER";
export const SET_PAYMENT_INFO = "SET_PAYMENT_INFO";
export const CLEAR_PAYMENT_INFO = "CLEAR_PAYMENT_INFO";

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
