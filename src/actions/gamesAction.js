import axios from "axios";
import { popularGamesUrl } from "../Api";

// ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData,
    },
  });
};
