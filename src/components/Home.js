import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      Home Welcome: {user.user.FIRST_NAME}, Token: {user.token}
    </div>
  );
};

export default Home;
