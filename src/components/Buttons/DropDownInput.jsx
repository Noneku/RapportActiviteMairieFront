import { select } from '@material-tailwind/react';
import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

export default function DropDownInput({ titleDropDown, items, handleFilter, attributeItems, rapportFilterBy }) {
  
  const handleOnClick = (valueMenu) => {
    handleFilter(valueMenu, rapportFilterBy); // Compare the element in MenuDropdown(value) by the "pole" of rapports(filterBy)
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
          {/* Menu Dropdown */}
          {items.map((element) => (
            <Dropdown.Item key={element.id} onClick={() => handleOnClick(element[attributeItems])}>
              {element[attributeItems]}
            </Dropdown.Item>
          ))}
          {/* Menu Dropdown */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
