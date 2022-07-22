import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Morgan");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
    </div>

  );
}

export default ParentComponent;