import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ProductListPage } from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      {path: '/products', element: <ProductListPage /> },
    ],
  },
]);

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
