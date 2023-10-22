import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import DropDownInput from "../Buttons/DropDownInput";

export function ListRapportActivite() {

  //Call Ajax qui apelle tous les poles
  const poles = [
    { id: 1, pole: "Cabinet" },
    { id: 2, pole: "Banque ABC" },
    { id: 3, pole: "Restaurant Le Bon Goût" },
    { id: 4, pole: "École Primaire Sunnydale" },
    { id: 5, pole: "Service Direction" }
  ];

  const [rapports, setRapports] = useState(
    [
      { id: 1, name: "Cabinet", description: "Service Direction" },
      { id: 2, name: "Pôle test", description: "Service Direction" },
      { id: 3, name: "Société XYZ", description: "Service de comptabilité" },
      { id: 4, name: "Banque ABC", description: "Service de gestion financière" },
      { id: 8, name: "Banque ABC", description: "test" },
      { id: 5, name: "Restaurant Le Bon Goût", description: "Service de restauration" },
      { id: 6, name: "Restaurant Le Bon Goût", description: "Service éducatif" },
      { id: 7, name: "Restaurant Le Bon Goût", description: "Service de soins de santé" }
  ]);
    

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="d-flex flex-row">
      <div className="container-fluid">
        <h1>Bienvenue dans le panneau d'administration</h1>
        <p>Ceci est le contenu de la page d'administration.</p>

        <h2>Rapport d'activité</h2>
        <DropDownInput titleDropDown={"Trier par pôle"} menuDropDown={ poles } />
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pôle</th>
              <th>Index</th>
              <th className="w-25">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rapports.map((item) => (
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
