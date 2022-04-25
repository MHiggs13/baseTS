import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "pages/main";
import "./app.css";
import styles from "./styles";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div css={styles.app}>
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
