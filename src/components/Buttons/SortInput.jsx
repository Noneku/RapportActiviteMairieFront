import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";

export default function SortInput() {

  //Le use state va contenir le tableau récuperer à trier
  const [poleSort, setPoleSort] = useState();

  // Fonction pour gérer le tri par pôle
  const handleSortByPole = () => {};

  //Le use state va contenir le tableau récuperer à trier
  const [indexSort, setIndexSort] = useState();
  
  // Fonction pour gérer le tri par index
  const handleSortByIndex = () => {
    // Mettez ici la logique de tri par index
  };

  return (
    <div className="d-flex">
      <Dropdown className="mx-4">
        <Dropdown.Toggle as={Button} variant="primary">
          Trier par pôle
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleSortByPole}>Ascendant</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle as={Button} variant="primary">
          Trier par index
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleSortByIndex}>Ascendant</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
