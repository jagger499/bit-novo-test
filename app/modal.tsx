import React from "react";
import { Container } from "@/components/container";
import { SearchList } from "@/components/list/searchList";
import { config } from "@/config";
import { router, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentInfo, setCountry } from "@/redux/actions/paymentActions";
import { RootState } from "@/redux/store";

export default function Modal() {
  const params = useLocalSearchParams();
  const currency = useSelector((state: RootState) => state.payment.currency);
  const country = useSelector((state: RootState) => state.country);
  const dispatch = useDispatch();
  const { type } = params;

  const { phoneData, currencyData } = config.modals;

  const isPhone = type === "phone";

  const value = isPhone ? country : currency;
  const data = isPhone ? phoneData : currencyData;

  return (
    <Container modal>
      <SearchList
        value={value}
        onChangeValue={(item) => {
          if (isPhone) {
            dispatch(setCountry(item));
          } else {
            dispatch(addPaymentInfo({ currency: item }));
          }
          router.push("../");
        }}
        data={data}
      />
    </Container>
  );
}
