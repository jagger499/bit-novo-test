import axios from "axios";

export const paymentsApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 500000,
  headers: { "X-Device-Id": process.env.EXPO_PUBLIC_X_DEVICE_ID },
});
