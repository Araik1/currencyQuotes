import { FETCH_QUOTES } from "../type";
import { showLoader, hideLoader } from "./loader";

const BASE_URL =
  "https://www.cbr-xml-daily.ru/archive/2000/07/15/daily_json.js";

export function fetchQuotes(date1 = "", date2 = "") {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(`${BASE_URL}`);
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: FETCH_QUOTES, payload: json });
        dispatch(hideLoader());
      }, 500);
    } catch (e) {}
  };
}
