import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Home = ({ name, releaseDate, id, image }) => {
  return (
    <StyleGame>
      <h3>{name}</h3>
      <h3>{releaseDate}</h3>
      <img src={image} alt="Game Image" />
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

export default Home;
