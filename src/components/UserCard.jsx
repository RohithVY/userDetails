import React, { useState } from "react";

const UserCard = ({ user, handleDeleteUser }) => {
  const [userState, setUserState] = useState(user);
  const handleEditValue = (e, title) => {
    const value = window.prompt(`Enter ${title}`);
    setUserState((userState) => ({ ...userState, [title]: value }));
  };
  return (
    <>
      {user && (
        <div className="card">
          <div>
            <p>Name : {userState.name}</p>
            <button onClick={(e) => handleEditValue(e, "name")}>Edit</button>
          </div>
          <div>
            <p>Age : {userState.age}</p>
            <button onClick={(e) => handleEditValue(e, "age")}>Edit</button>
          </div>
          <div>
            <p>Email: {userState.email}</p>
            <button onClick={(e) => handleEditValue(e, "email")}>Edit</button>
          </div>
          <div>
            <p>Phone Number : {userState.phone}</p>
            <button onClick={(e) => handleEditValue(e, "phone")}>Edit</button>
          </div>
          <button onClick={() => handleDeleteUser(user.name)}>
            Delete User
          </button>
        </div>
      )}
      {!user && <p>No users exist in this range</p>}
    </>
  );
};

export default UserCard;
