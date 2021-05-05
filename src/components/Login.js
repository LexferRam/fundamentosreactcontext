import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Login = (props) => {
  const [user, setUser] = useState({ p_portal_username: "", p_pwd: "" });
  const { authUser } = useContext(UserContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    authUser(user);
    props.history.push("/Home");
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <h3>Please sign in</h3>
          <label htmlFor="username">Username: </label>
          <div>
            {" "}
            <input
              type="text"
              name="p_portal_username"
              onChange={onChange}
              placeholder="Enter Username"
            />
          </div>

          <label htmlFor="password">Password: </label>
          <div>
            {" "}
            <input
              type="password"
              name="p_pwd"
              onChange={onChange}
              placeholder="Enter Password"
            />
          </div>

          <button type="submit">Log in </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
