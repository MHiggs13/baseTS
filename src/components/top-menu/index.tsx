import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

const TopMenu = (): ReactElement => {
  return (
    <div css={styles.wrapper}>
      <Link to="/home" css={styles.navLink}>
        Home
      </Link>
      <Link to="/about" css={styles.navLink}>
        About
      </Link>
      <Link to="/wow" css={styles.navLink}>
        wow
      </Link>
      <Link to="/puzzles" css={styles.navLink}>
        Puzzles
      </Link>
      <Link to="/exercise" css={styles.navLink}>
        Exercise
      </Link>
    </div>
  );
};

export default TopMenu;
