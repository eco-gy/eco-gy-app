import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { DASHBOARD_PAGE_PATH, LOGIN_PAGE_PATH } from "./config/constants";
import DashboardPage from "./pages/DashboardPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={LOGIN_PAGE_PATH} element={<LoginPage />} />
          <Route path={DASHBOARD_PAGE_PATH} element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
