import { css } from "@emotion/react";
import theme from "theme";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
  `,
  puzzleText: css`
    font-size: 20px;
    text-align: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  `,
  separator: css`
    height: 2px;
    width: 80%;
    background-color: ${theme.colors.hunter};
    margin: 8px 0;
  `,
  puzzleDemo: css`
    display: flex;
    flex-direction: row;
  `,
  box: css`
    height: 130px;
    width: 80px;
    background-color: coral;
    margin: 10px;
  `,
  catImage: css`
    margin-top: 40px;
  `,
};
