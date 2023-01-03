import React, { useEffect, useState } from "react";
import AddUser from "../components/AddUser/AddUser";
import ShowUser from "../components/ShowUser/ShowUser";
import { getUsers } from "../services/admin-service";
function User() {
  const [listUser, setListUser] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const handleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

  const handleGetUser = async () => {
    try {
      const response = await getUsers();
      setListUser(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleGetUser();
    window.scrollTo(0, 0);
  }, [showAddUser]);
  return (
    <div>
      <AddUser
        onAddUser={handleGetUser}
        show={showAddUser}
        onClose={handleAddUser}
      />

      <button onClick={handleAddUser}>Add User</button>
      {listUser?.length > 0 &&
        listUser?.map((item, index) => {
          return (
            <ShowUser
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              password={item.password}></ShowUser>
          );
        })}
    </div>
  );
}

export default User;
