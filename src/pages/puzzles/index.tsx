import React, { ReactElement, useState } from "react";
import CatPuzzle from "./components/cat-puzzle";
import styles from "./styles";

const Puzzles = (): ReactElement => {
  return (
    <div css={styles.wrapper}>
      <CatPuzzle />
    </div>
  );
};

export default Puzzles;
