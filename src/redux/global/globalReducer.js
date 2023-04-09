const initializedState = {
  video: `./Assets/images/LiquidsWavy.mp4`,
};
const globalReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "CHANGE_MOVIE":
      return {
        video: action.payload,
      };

    default:
      return state;
  }
};

export default globalReducer;
