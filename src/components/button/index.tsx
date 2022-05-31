import React, { ReactElement } from "react";
import plusSign from "assets/svg/plus-sign.svg";
import minusSign from "assets/svg/minus-sign.svg";
import styles from "./styles";

interface IProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: IProps): ReactElement => {
  return (
    <div css={styles.wrapper}>
      <button css={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
