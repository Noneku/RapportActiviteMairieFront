import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

export default function DropDownInput({ titleDropDown, items, handleFilter, attribute }) {
  const handleOnClick = (value) => {
    handleFilter(value, attribute); // Appelez la fonction de filtrage avec la valeur sélectionnée
  };

  return (
    <div className="d-flex">
      <Dropdown className="mx-4">
        <Dropdown.Toggle as={Button} variant="primary">
          {titleDropDown}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleOnClick("Tous")}>
            Tous
          </Dropdown.Item>
          {items.map((element) => (
            <Dropdown.Item key={element.id} onClick={() => handleOnClick(element[attribute])}>
              {element[attribute]}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
