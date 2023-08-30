import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions";
import { User } from "../redux/types";

const UserList: React.FC = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
