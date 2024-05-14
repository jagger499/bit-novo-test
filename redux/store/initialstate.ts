import { config } from "@/config";
import { PaymentState } from "@/types/redux";

export const initialState: PaymentState = {
  country: config.modals.phoneData[0],
  payment: {
    currency: config.modals.currencyData[1],
    total: "",
    description: "",
  },
  url: "",
  identifier: "",
};
