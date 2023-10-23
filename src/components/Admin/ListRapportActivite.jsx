import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import DropDownInput from "../Buttons/DropDownInput";
import APIService from "../../services/APIService";

export function ListRapportActivite() {
  const [poles, setPoles] = useState([]); // State to store the "Poles"
  const [index, setIndex] = useState([]); // State to store the "Index"
  const [rapports, setRapports] = useState([]); // State to store the filter all "Rapports"
  const [rapportsOriginaux, setRapportsOriginaux] = useState([]); // State to store the orignal "Rapport" PS: This state is use for the filter array

  // Load API query "Poles & Rapports" before the creation of component
  useEffect(() => {
    async function fetchData() {
      try {
        const polesData = await APIService.getPoles();
        const indexData = await APIService.getIndex();
        const rapportsData = await APIService.getRapports();

        setPoles(polesData);
        setIndex(indexData);
        setRapports(rapportsData);
        setRapportsOriginaux(rapportsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Function for filter the array "rapportsOriginaux"
const handleFilter = (selectedValue, attribute) => {
  if (selectedValue === "Tous") {
    setRapports(rapportsOriginaux); // Call all rapports
  } else {
    const filteredRapports = rapportsOriginaux.filter(
      (rapport) => rapport[attribute] === selectedValue
    );
    setRapports(filteredRapports);
  }
};

  return (
    <div className="d-flex flex-row">
      <div className="container-fluid">
        <h1>Bienvenue dans le panneau d'administration</h1>
        <p>Ceci est le contenu de la page d'administration.</p>
        <h2>Rapport d'activité</h2>
        <DropDownInput
          titleDropDown={"Trier par poles"}
          items={poles} // Le tableau d'éléments basé sur l'index
          handleFilter={handleFilter} // La fonction de filtrage par index
          attribute="poleNom" // Spécifiez l'attribut à utiliser
        />

        {/* <DropDownInput
          titleDropDown={"Trier par index"}
          items={index} // Le tableau d'éléments basé sur l'index
          handleFilter={handleFilter} // La fonction de filtrage par index
          attribute="indexNom" // Spécifiez l'attribut à utiliser
        /> */}
        {/* <DropDownInput titleDropDown={"Trier par index"} /> */}
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pôle</th>
              <th>Services/Direction</th>
              <th>Status</th>
              <th className="w-25">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rapports.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.pole}</td>
                <td>{item.index}</td>
                <td></td>
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
