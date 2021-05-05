//AQUI VA EL ESTADO Y LA FUNCIONES QUE PUEDEN MODIFICARLO
import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";
//useReducer permite tener varios estados y varias funciones, y jecutar una funcion especifica para modificar un estado especifico

const UserState = (props) => {
  const initalState = {
    users: [],
    selectedUser: null,
    user: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initalState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.data,
    });
  };

  const authUser = async (user) => {
    // console.log(user);
    const res = await axios.post(
      "https://segurospiramide.com/asg-api/login",
      user
    );
    dispatch({
      type: "AUTH_USER",
      payload: res.data,
    });

    console.log(res.data);
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        user: state.user,
        getUsers,
        getProfile,
        authUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
