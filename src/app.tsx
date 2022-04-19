import React, { ReactElement } from "react";
import Home from "pages/home";
import "./app.css";
import styles from "./styles";

const App = (): ReactElement => {
  return (
    <div css={styles.app}>
      App
      <Home />
      <p>this is a para</p>
    </div>
  );
};

export default App;
