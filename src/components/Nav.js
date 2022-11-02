import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
// redux
import redux from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../actions/gamesAction";
// Animation
import { fadeIn } from "../animation";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Thunder-bolt</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #39d9fd;
    color: #fff;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    color: #43c6e0;
  }
`;
export default Nav;
