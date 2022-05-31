import React, { ReactElement } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TopMenu from "components/top-menu";
import Wow from "pages/wow";
import Puzzles from "pages/puzzles";
import Exercise from "pages/exercise";
import styles from "./styles";

const Main = (): ReactElement => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/about" element={<div>about page</div>} />
        <Route path="/home" element={<div>home page</div>} />
        <Route path="/wow" element={<Wow />} />
        <Route path="/puzzles" element={<Puzzles />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/" element={<div>home page</div>} />
      </Routes>
    </>
  );
};

export default Main;
