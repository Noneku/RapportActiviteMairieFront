import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarAdmin() {
  return (
    <div className="d-flex flex-row justify-content-around">
      <div className="bg-dark text-light d-flex flex-column">
        <h2 className="text-center p-4">Admin Panel</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/ListRapportActivite"> {/* Utilisation de Link */}
              Liste Rapport Activité
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/ListURL"> {/* Utilisation de Link */}
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
      {/* Suppression de ListRapportActivite */}
    </div>
  );
}
