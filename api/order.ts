import { OrderData, OrderResponse } from "@/types/api";
import { AxiosResponse } from "axios";
import { paymentsApi } from ".";

export const createOrder = async ({
  amount,
  description,
  fiat,
}: OrderData): Promise<OrderResponse> => {
  const response: AxiosResponse<OrderResponse> = await paymentsApi.post(
    "orders/",
    {
      expected_output_amount: amount,
      input_currency: "BCH_TEST",
      notes: description,
      fiat: fiat,
      language: "ES",
    }
  );
  return response.data;
};
