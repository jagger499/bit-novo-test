import { setUrl } from "@/redux/actions/paymentActions";
import { RootState } from "@/redux/store";
import { OrderResponse } from "@/types/api";
import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useLanguages } from "./useLanguage";


export const useWebSocket = () => {
  const {t} = useLanguages();
  const identifier = useSelector((state: RootState) => state.identifier);
  const dispatch = useDispatch();

  useEffect(() => {
    const websocketUrl = `${process.env.EXPO_PUBLIC_WS_URL}merchant/${identifier}`;
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      ToastAndroid.show(t('socketRefresh'), ToastAndroid.SHORT);
      console.log("WebSocket connection established: " + `${websocketUrl}`);
    };

    ws.onmessage = (event) => {
      const data: OrderResponse = JSON.parse(event.data);
      if (data?.web_url) {
        dispatch(setUrl({ url: data?.web_url }));
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed: " + `${websocketUrl}`);
    };

    ws.onerror = () => {
      console.log("WebSocket connection error: " + `${websocketUrl}`);
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [identifier]);

  return {};
};
