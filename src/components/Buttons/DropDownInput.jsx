import React from 'react'
import { Button, Dropdown } from "react-bootstrap";

export default function DropDownInput({ titleDropDown, menuDropDown, handleFilter }) {
  const handleOnClick = (value) => {
    handleFilter(value); // Appelez la fonction de filtrage avec la valeur sélectionnée
  };

  return (
    <div className="d-flex">
      <Dropdown className="mx-4">
        <Dropdown.Toggle as={Button} variant="primary">
          {titleDropDown}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item key="Tous" onClick={() => handleOnClick("Tous")}>
            Tous
          </Dropdown.Item>
          {menuDropDown.map((element) => (
            <Dropdown.Item key={element.id} onClick={() => handleOnClick(element.poleNom)}>
              {element.poleNom}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
