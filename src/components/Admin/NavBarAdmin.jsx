import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarAdmin() {
  return (
      <div className="bg-dark text-light d-flex flex-column">
        <h2 className="text-center p-4">Admin Panel</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/ListRapportActivite">
                Liste Rapport Activité
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ListURL">
              Liste URL
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Option 3
            </a>
          </li>
        </ul>
      </div>
  );
}
