import React, { ReactElement } from "react";
import plusSign from "assets/svg/plus-sign.svg";
import minusSign from "assets/svg/minus-sign.svg";
import styles from "./styles";

interface IProps {
  value: number;
  setValue: (value: number) => void;
  step?: number;
}

const InputNumber = ({ value, setValue, step = 10 }: IProps): ReactElement => {
  return (
    <div css={styles.wrapper}>
      <input
        css={styles.encounterTimeInput}
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        min={0}
      />
      <button onClick={() => setValue(value + step)}>
        <img
          src={plusSign}
          alt="A Rectangle Image with SVG"
          height="45px"
          width="45px"
        />
      </button>
      <button onClick={() => setValue(Math.max(value - step, 0))}>
        <img
          src={minusSign}
          alt="A Rectangle Image with SVG"
          height="45px"
          width="45px"
        />
      </button>
    </div>
  );
};

export default InputNumber;
