const userReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGN_UP":
      const storeData = async () => {
        try {
          await AsyncStorage.setItem("profile", JSON.stringify(action.payload));
        } catch (e) {
          console.log(e);
        }
      };
      storeData();

      return { ...state, data: action.payload };
    case "SIGN_IN":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default userReducer;
