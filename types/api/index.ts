import { AxiosResponse } from "axios";

export interface OrderData {
  amount: number;
  description: string;
  fiat: string;
}

export interface OrderResponse {
  identifier: string;
  reference: string;
  payment_uri: string;
  web_url: string;
  address: string;
  tag_memo: string;
  input_currency: string;
  expected_input_amount: number;
  rate: number;
  notes: string;
  fiat: string;
  language: string;
  error?: string;
}

export interface CustomError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}