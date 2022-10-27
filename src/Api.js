const base_url = "https://api.rawg.io/api/";

const getcurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getcurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentDay = getcurrentDay();
const currentMonth = getcurrentMonth();

const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
const lastYear = `${currentYear}-${currentMonth}-${currentDay - 1}`;
const nextYear = `${currentYear}-${currentMonth}-${currentDay + 1}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesUrl = () => `${base_url}${popular_games}`;

console.log(popularGamesUrl());
