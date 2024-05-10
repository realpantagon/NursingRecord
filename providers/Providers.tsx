"use client";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { toastRef } from "@/app/components/toast/Toast";
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toast ref={toastRef} />
      {children}
    </div>
  );
};
