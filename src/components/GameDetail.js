import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {
                (game.platforms.map = (data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
