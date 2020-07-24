import { FETCH_QUOTES } from "../type";

const initialState = {
  quotes: {},
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return { ...state, quotes: action.payload };
    default:
      return state;
  }
};
