export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return {
    type: "Log_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "Log_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Log_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "Log_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
