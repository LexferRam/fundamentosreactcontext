import { GET_PROFILE, GET_USERS, AUTH_USER, TOKEN } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };
    case AUTH_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
