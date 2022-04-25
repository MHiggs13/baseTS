import React, { ReactElement } from "react";
import Cooldowns from "./cooldowns";
import styles from "./styles";

const Wow = (): ReactElement => {
  return (
    <div css={styles.wrapper}>
      <div>Wow Section</div>
      <Cooldowns />
    </div>
  );
};

export default Wow;
