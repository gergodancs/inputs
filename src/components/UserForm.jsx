import React from "react";
import { useState } from "react";
import UserResult from "./UserResult";
import Modal from "./Modal";

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [noName, setNoName] = useState(false);
  const [inpClass, setInpClass] = useState("");
  const [inpAgeClass, setInpAgeClass] = useState("");

  let modalEgy = "Ird be a neved";
  let modalKetto = "Ird be a korod";

  const submitForm = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setNoName(true);
      setInpClass("warning");
      return;
    }
    if (age.length === 0) {
      setNoName(true);
      setInpAgeClass("warning");
      return;
    }

    setUsers([...users, { name: name, age: age }]);
    setName("");
    setAge("");
    setNoName(false);
    setInpClass("");
    setInpAgeClass("");
  };

  return (
    <div className="form__container">
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input
          className={inpClass}
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <label>Age (Years)</label>
        <input
          className={inpAgeClass}
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="text"
        />
        <button type="submit">Add User</button>
      </form>
      <UserResult users={users} setUsers={setUsers} />
      {noName && !name.length ? (
        <Modal set={setNoName} content={modalEgy} />
      ) : noName && !age.length ? (
        <Modal set={setNoName} content={modalKetto} />
      ) : null}
    </div>
  );
};

export default UserForm;
