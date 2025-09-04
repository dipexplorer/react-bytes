import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>User not logged in</h1>;
  return (
    <div>
      <h2>User Profile</h2>
      <h1>{user.username}</h1>
    </div>
  );
};

export default Profile;
