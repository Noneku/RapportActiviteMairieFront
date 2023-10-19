import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import { ListRapportActivite } from "./ListRapportActivite";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListURL } from './ListURL.jsx';

export function DashBoardAdmin() {
  return (
    <BrowserRouter>
      <div className="d-flex h-100">
        <NavBarAdmin />
        <Routes>
          <Route path="/AdminPanel" element={<ListRapportActivite />} />
          <Route path="/ListURL" element={<ListURL />} />
          <Route path="/ListRapportActivite" element={<ListRapportActivite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
