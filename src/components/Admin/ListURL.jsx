import React, { useState } from "react";
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";


export function ListURL() {
  const [items, setItems] = useState([
    { id: 1, name: "Cabinet", description: "Service Test" },
    { id: 2, name: "Pôle test", description: "Service Direction" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className=" w-25 p-4">
      <h1>Bienvenue dans le panneau d'administration</h1>
      <p>Ceci est le contenu de la page d'administration.</p>

      <h2>URL Panel</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>Index</th>
            <th className="w-25">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td className="d-flex flex-row justify-content-around">
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Supprimer
                </Button>
                <Button variant="warning" onClick={() => handleDelete(item.id)}>
                  Editer
                </Button>
                <Button variant="primary" onClick={() => handleDelete(item.id)}>
                  Télécharger
                </Button>
                {/* Ajoutez ici d'autres boutons pour les actions d'édition, etc. */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
