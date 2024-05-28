"use client";
import { useRef, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef(store);
  if (!storeRef.current) {
    storeRef.current = store;
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};
