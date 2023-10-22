import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

export function ListURL() {
  const [items, setItems] = useState([
    { id: 1, name: "www.test1.com", description: "Service Test" },
    { id: 2, name: "www.test2.com", description: "Service Direction" },
    { id: 3, name: "www.test3.com", description: "Service Jardin" },
    { id: 4, name: "www.test4.com", description: "Service Dep" },
    { id: 5, name: "www.test5.com", description: "Service Quest" },
    { id: 6, name: "www.test6.com", description: "Service pole" },
    { id: 7, name: "www.test7.com", description: "Service jokli" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="d-flex flex-row">
      <div className="container-fluid">
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
