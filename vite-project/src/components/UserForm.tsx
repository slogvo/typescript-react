import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../redux/types";
import { addUser, updateUser } from "../redux/actions";

interface UserFormProps {
  user?: User;
  onSubmit: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>(user ? user.name : "");
  const [email, setEmail] = useState<string>(user ? user.email : "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser: User = {
      id: user ? user.id : Date.now(),
      name,
      email,
    };

    if (user) {
      dispatch(updateUser(newUser));
    } else {
      dispatch(addUser(newUser));
    }

    setName("");
    setEmail("");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">{user ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
