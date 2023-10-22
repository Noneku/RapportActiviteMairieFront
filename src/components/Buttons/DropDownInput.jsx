import React from 'react'
import { Button, Dropdown } from "react-bootstrap";

export default function DropDownInput({ titleDropDown, menuDropDown }) {
  return (
    <div className="d-flex">
      <Dropdown className="mx-4">
        <Dropdown.Toggle as={Button} variant="primary">
          { titleDropDown }
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {
                menuDropDown.map((element) => 
                
                <Dropdown.Item key={element.id}>{ element.pole }</Dropdown.Item>
                )
            }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
