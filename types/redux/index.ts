import {
  addPaymentInfo,
  clearPaymentInfo,
  setCountry,
  setIdentifier,
  setUrl,
} from "@/redux/actions/paymentActions";
import { SearchListItem } from "../components/list";

export interface PaymentInfo {
  currency?: SearchListItem;
  total?: string;
  description?: string;
  country?: SearchListItem
}

export type PaymentActionTypes =
  & ReturnType<typeof addPaymentInfo>
  & ReturnType<typeof setUrl>
  & ReturnType<typeof setCountry>
  & ReturnType<typeof setIdentifier>
  & ReturnType<typeof clearPaymentInfo>;

export interface PaymentState {
  payment: PaymentInfo;
  url?: string;
  identifier?: string;
  country?: SearchListItem
}

// action_names
export const SET_URL = "SET_URL";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_IDENTIFIER = "SET_IDENTIFIER";
export const SET_PAYMENT_INFO = "SET_PAYMENT_INFO";
export const CLEAR_PAYMENT_INFO = "CLEAR_PAYMENT_INFO";