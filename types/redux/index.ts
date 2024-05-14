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
