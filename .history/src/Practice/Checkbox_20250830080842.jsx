import { useState } from "react";

function Checkbox() {
  const [gender, setGender] = useState("");

  function handleChange(event) {
    setGender(event.target.value);
  } 

  return (
    <>
      <h1>Gender: {gender}</h1>

      <input
        type="radio"
        name="gender"
        id="male"
        value="Male"
        onChange={handleChange}
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        name="gender"
        id="female"
        value="Female"
        onChange={handleChange}
      />
      <label htmlFor="female">Female</label>
    </>
  );
}

export default Checkbox;
