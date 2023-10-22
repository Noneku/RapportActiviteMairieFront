import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import { ListRapportActivite } from "./ListRapportActivite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListURL } from "./ListURL.jsx";

export function DashBoardAdmin() {
  return (
    <div className="d-flex h-100">
      <NavBarAdmin />
      <div className="flex-grow-1">
          <Routes>
            <Route
              path="/ListRapportActivite"
              element={<ListRapportActivite />}
            />
            <Route path="/ListURL" element={<ListURL />} />
          </Routes>
      </div>
    </div>
  );
}
