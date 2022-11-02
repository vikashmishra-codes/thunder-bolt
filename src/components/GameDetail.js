import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// images
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import gamepad from "../img/gamepad.svg";
// stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  // Navigate Handler alternate of useHistory
  const navigate = useNavigate();
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  // get star
  const getStar = () => {
    const star = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        star.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return star;
  };
  // exit handler
  const exitHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  // platform icon fn
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 3":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox 360":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "PC":
        return steam;
      case "macOS":
        return apple;
      default:
        return gamepad;
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutid={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStar()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      alt="platform"
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutid={`image ${pathId}`}
                src={game.background_image}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={screen.image} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .rating img {
    height: 1rem;
    width: 1rem;
    display: inline-block;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
