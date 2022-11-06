import { LOGIN_USER, LOGOUT_USER } from "../action-types/authActionType";

export const INITIAL_STATE = {
  userName: "",
  imageURL: "",
  userEmail: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log('action',action)
  console.log('state',state)
  switch (action.type) {
    case LOGIN_USER:
      console.log('fianl', {
        ...state,
        ...action.payload,
      })
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_USER:
      return { ...INITIAL_STATE };
    default:
      return { ...INITIAL_STATE };
  }
};
export default userReducer;
