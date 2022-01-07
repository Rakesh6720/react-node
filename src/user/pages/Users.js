import React from "react";
import UsersList from "../components/UsersList";

// output a list of users
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rakesh",
      image: "https://avatars.githubusercontent.com/u/31023635?v=4",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
