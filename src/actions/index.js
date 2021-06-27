import axios from "axios";

export const fetchTemp = (text) => async (dispatch) => {
  const response = await axios.get("http://api.weatherstack.com/current", {
    params: {
      access_key: "7ead1f6b9382c071f1b75c042a5ca57f",
      query: text,
    },
  });
  dispatch({ type: "Fetch_temp", payload: response.data.current.temperature });
};
