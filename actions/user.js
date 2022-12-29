import * as api from "../api/index.js";

export const signup = (values) => async (dispatch) => {
  try {
    const { data } = await api.signup(values);

    dispatch({ type: "SIGN_IN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signin = (values) => async (dispatch) => {
  try {
    const { data } = await api.signin(values);
    dispatch({ type: "SIGN_IN", payload: data });
  } catch (error) {
    console.log(error);
  }
};
