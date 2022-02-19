import { reducerTypeUser } from "../../commons/constantas";

const initialState = {
  customers: [],
  userDetail: {},
  userLogin: {}
}

function userReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === reducerTypeUser.customers) {
    return { ...state, customers: payload };
  } else if (type === reducerTypeUser.userDetail) {
    return { ...state, userDetail: payload };
  } else if (type === reducerTypeUser.userLogin) {
    return { ...state, userLogin: payload };
  }

  return state;
}

export default userReducer;