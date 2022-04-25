import { css } from "@emotion/react";
import theme from "theme";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
    font-size: 20px;
  `,
  encounterTime: css`
    display: flex;
    flex-direction: column;

    div {
      margin-left: 50px;
      margin-right: auto;
      text-align: right;
    }
  `,
};
