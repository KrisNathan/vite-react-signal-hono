import React from "react";
import { counter } from "./signals/counter";

interface CounterBtnProps {
  children: React.ReactNode;
}

export default function CounterBtn({ children }: CounterBtnProps) {
  return (
    <button
      onClick={() => {
        counter.value++;
      }}
    >
      {children}
    </button>
  );
}
