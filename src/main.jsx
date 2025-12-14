import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { ProductListPage, ProductDetailsPage } from "@/pages/product";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "@/store/store.js";
import { Provider } from "react-redux";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/products", element: <ProductListPage /> },
      {path: '/products/:id', element: <ProductDetailsPage /> }
    ],
  },
]);

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
