import { GAME_DOWNLAOD, CANCEL_DOWNLOAD } from "./types";

// Step: first Setting Initial State
const initialState = {
  downloads: 1227062,
};

// creating Reducer function with both types
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_DOWNLAOD:
      return {
        ...state,
        downloads: state.downloads + 1,
      };
    case CANCEL_DOWNLOAD:
      return {
        ...state,
        downloads: state.downloads - 1,
      };
    // if no action then return default state
    default:
      return state;
  }
};
export default Reducer;
