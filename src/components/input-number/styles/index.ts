import { css } from "@emotion/react";
import theme from "theme";

export default {
  wrapper: css`
    display: flex;
    justify-content: center;
    margin-top: 15px;
  `,
  encounterTimeInput: css`
    width: 170px;
    font-size: 40px;
    padding: 10px;
    border-radius: 8px;

    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.16);
    margin-top: 10px;
    margin-bottom: 10px;

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    -moz-appearance: textfield;
  `,
};
