import { toastRef } from "@/app/components/toast/Toast";

type SeverityType = "success" | "info" | "warn" | "error";

export const createToast = (severity: SeverityType, summary: string, detail: string) => {
    toastRef.current?.show({
        severity: severity,
        summary: summary,
        detail: detail,
        life: 3000,
    });
};