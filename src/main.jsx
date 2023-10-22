import React from "react";
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { FormRapportActivite } from "./components/Form/FormRapportActivite.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardAdmin } from "./components/Admin/DashBoardAdmin.jsx";
import FormLogin from "./components/Form/FormLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<DashBoardAdmin />} />
        <Route path="/" element={<FormLogin />} />
        <Route path="/form" element={<FormRapportActivite />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
