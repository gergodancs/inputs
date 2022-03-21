import React from "react";

const UserResult = (props) => {
  const deleteUser = (index) => {
    props.users.splice(index, 1);
    props.setUsers([...props.users], props.users);
  };

  return (
    <div className="users">
      {props.users.map((item, index) => {
        return (
          <div
            key={index}
            className="user__container"
            onClick={() => deleteUser(index)}
          >
            <span>{item.name} </span>

            <span>({item.age} years old)</span>
          </div>
        );
      })}
    </div>
  );
};

export default UserResult;
