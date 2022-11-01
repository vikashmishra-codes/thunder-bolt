import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../Api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenshotsUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
