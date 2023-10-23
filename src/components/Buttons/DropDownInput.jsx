import React from 'react'
import { Button, Dropdown } from "react-bootstrap";

export default function DropDownInput({ titleDropDown, menuDropDown, setterArray, originalData }) {

    //Function for filter by dropdown button
    const handleOnClick = (value) => {
        if (value === "Tous") {
          setterArray(originalData);
        } else {
          const filterRapport = originalData.filter((rapport) => rapport.name === value);

          setterArray(filterRapport);
        }
      }

  return (
    <div className="d-flex">
      <Dropdown className="mx-4">
        <Dropdown.Toggle as={Button} variant="primary">
          { titleDropDown }
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item key="Tous" onClick={() => handleOnClick("Tous")}>Tous</Dropdown.Item>
            {
                //Display menu
                menuDropDown.map((element) =>               
                <Dropdown.Item key={element.id} onClick={() => handleOnClick(element.poleNom)}>{ element.poleNom }</Dropdown.Item>
            )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
