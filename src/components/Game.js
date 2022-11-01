import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, releaseDate, id, image }) => {
  // Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyleGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <h3>{releaseDate}</h3>
      <img src={image} alt="Game poster" />
    </StyleGame>
  );
};

const StyleGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  text-align: center;
  border-radius: 1rem;
`;

export default Game;
