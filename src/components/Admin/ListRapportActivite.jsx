import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import DropDownInput from "../Buttons/DropDownInput";
import APIService from "../../services/APIService";

export function ListRapportActivite() {

  const [poles, setPoles] = useState([]); // State to store the "Poles"
  const [rapports, setRapports] = useState([]); // State to store the filter all "Rapports"
  const [rapportsOriginaux, setRapportsOriginaux] = useState([]); // State to store the orignal "Rapport" PS: This state is use for the filter array

  // Load API query "Poles & Rapports"
  useEffect(() => {
    async function fetchData() {
      try {
        const polesData = await APIService.getPoles();
        const rapportsData = await APIService.getRapports();
        
        setPoles(polesData);
        setRapports(rapportsData);
        setRapportsOriginaux(rapportsData);

      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData();
  }, []);
  
  
  // Function for filter the array "rapportsOriginaux"
  const handleFilterRapports = (selectedPole) => {
    if (selectedPole === "Tous") {
      setRapports(rapportsOriginaux); // Call all rapports
    } else {
      const filteredRapports = rapportsOriginaux.filter((rapport) => rapport.pole === selectedPole);
      setRapports(filteredRapports);
    }
  };

  return (
    <div className="d-flex flex-row">
      <div className="container-fluid">
        <h1>Bienvenue dans le panneau d'administration</h1>
        <p>Ceci est le contenu de la page d'administration.</p>

        <h2>Rapport d'activité</h2>
        <DropDownInput titleDropDown={"Trier par pôle"} menuDropDown={poles} handleFilter={handleFilterRapports} />
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
                <td>{item.pole}</td>
                <td>{item.index}</td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
