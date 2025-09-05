import { useState } from "react";

function Checkbox() {
  // const [gender, setGender] = useState("");

  // function handleChange(event) {
  //   setGender(event.target.value);
  // } 

  // return (
  //   <>
      {/* <h1>Gender: {gender}</h1>

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
      <label htmlFor="female">Female</label> */}
    
  const users = [
    { id: 1, name: "Sandeep", age: 21 },
    { id: 2, name: "Adi", age: 25 },
    { id: 3, name: "Neha", age: 22 },
  ];

  return (
    <>
    <div>
      <h1>Users List 👥</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>

    </>
  );
}

export default Checkbox;
