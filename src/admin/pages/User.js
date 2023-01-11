import React, { useEffect, useState } from "react";
import UserForm from "../components/AddUser/UserForm";
import ShowUser from "../components/ShowUser/ShowUser";
import { getUsers } from "../services/admin-service";
import Modal from "../../user/components/Modal";
import "./User.css";
function User() {
  const [listUser, setListUser] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
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

  const handleEditUser = (id) => {
    setIdEdit(id);
    handleAddUser();
  };
  useEffect(() => {
    handleGetUser();
    window.scrollTo(0, 0);
    console.log(listUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div class="user__container">
      <Modal visible={showAddUser} onCloseModal={() => setShowAddUser(false)}>
        <UserForm
          onGetUser={handleGetUser}
          show={showAddUser}
          onClose={handleAddUser}
          user={listUser.find((user) => user.id === idEdit)}
          onEdit={handleEditUser}
          isEdit={idEdit}
        />
      </Modal>

      <div class="user__title">
        <h1>User</h1>
        <button onClick={handleAddUser} class="custom-button">
          Add User
        </button>
      </div>

      <div>
        <div class="user__table">
          <div class="table__header">
            <div>ID</div>
            <div>Name</div>
            <div>Email</div>
            <div>Password</div>
            <div>Action</div>
          </div>
        </div>
        {listUser?.length > 0 &&
          listUser?.map((item, index) => {
            return (
              <ShowUser
                onGetUser={handleGetUser}
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                password={item.password}
                onEdit={handleEditUser}></ShowUser>
            );
          })}
      </div>
    </div>
  );
}

export default User;
