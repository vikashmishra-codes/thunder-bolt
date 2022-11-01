const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// key
const key = process.env.REACT_APP_GAME_API;

const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&date=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${key}&date=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
// games details passing prop like =({id})=>{...} and =(id)=>{...} is different
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${key}`;
// screenShots
export const gameScreenshotsUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${key}`;
