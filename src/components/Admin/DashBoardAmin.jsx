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
        <ListRapportActivite/>
    </div>

      <Routes>
        <Route path="/ListURL" element={<ListURL />} />
        <Route path="/ListRapport" element={<ListURL />} />
      </Routes>
    </BrowserRouter>
  );
}
