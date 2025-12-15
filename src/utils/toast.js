// src/utils/toast.js
import { createRef } from "react";

export const toastRef = createRef();

export const showToast = (message, severity = "success") => {
  toastRef.current?.(message, severity);
};
