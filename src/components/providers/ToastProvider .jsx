// src/components/ToastProvider.jsx
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { toastRef } from "../../utils/toast";

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    toastRef.current = (message, severity = "success") => {
      setToast({ open: true, message, severity });
    };
  }, []);

  return (
    <>
      {children}

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={toast.severity} variant="filled">
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ToastProvider;
