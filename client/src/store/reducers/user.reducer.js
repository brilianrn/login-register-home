import { reducerTypeUser } from "../../commons/constantas";

const initialState = {
  customers: [],
  customerDetail: {},
  userLogin: {}
}

function userReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === reducerTypeUser.customers) {
    return { ...state, customers: payload };
  } else if (type === reducerTypeUser.customerDetail) {
    return { ...state, customerDetail: payload };
  } else if (type === reducerTypeUser.userLogin) {
    return { ...state, userLogin: payload };
  }

  return state;
}

export default userReducer;