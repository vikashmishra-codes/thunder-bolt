const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

// ACTION CREATER
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};
export default gamesReducer;
