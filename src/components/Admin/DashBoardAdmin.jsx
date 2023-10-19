import React, { useState } from "react";
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";

export function DashBoardAdmin() {
  const [user, setUser] = useState({
    username: "Nom de l'Utilisateur",
  });

  const [items, setItems] = useState([
    { id: 1, name: 'Cabinet', description: 'Service Test' },
    { id: 2, name: 'Pôle test', description: 'Service Direction' },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        {/* Barre de navigation à gauche (colonne fixe sur les écrans moyens et plus grands) */}
        <Col md={2} className="bg-dark text-light d-flex flex-column">
          <h2 className="text-center p-4">Admin Panel</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Option 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Option 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Option 3
              </a>
            </li>
          </ul>
        </Col>

        {/* Contenu de la page à droite (colonne prenant toute la largeur sur les écrans moyens et plus grands) */}
        <Col md={10} className="p-4">
          <h1>Bienvenue dans le panneau d'administration</h1>
          <p>Ceci est le contenu de la page d'administration.</p>

          <h2>Rapport d'activité</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Pôle</th>
                <th>Index</th>
                <th className="w-auto">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td className="d-flex flex-row justify-content-around">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Supprimer
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleDelete(item.id)}
                    >
                      Editer
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleDelete(item.id)}
                    >
                      Télécharger
                    </Button>
                    {/* Ajoutez ici d'autres boutons pour les actions d'édition, etc. */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
