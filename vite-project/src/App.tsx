// src/App.tsx
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>User Manager</h1>
      <button onClick={handleToggleForm}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      {showForm && <UserForm onSubmit={handleToggleForm} />}
      <UserList />
    </div>
  );
};

export default App;
