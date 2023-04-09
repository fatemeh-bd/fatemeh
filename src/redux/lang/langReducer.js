const initializedState = {
  loading: true,
  lng: "en",
};
const langReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        loading: false,
        lng: action.payload,
      };

    default:
      return state;
  }
};

export default langReducer;
