import { css } from "@emotion/react";
import theme from "theme";

export default {
  wrapper: css`
    display: flex;
    justify-content: center;
    margin-top: 15px;
  `,
  navLink: css`
    font-size: 32px;
    text-decoration: none;
    decoration: none;
    cursor: pointer;
    margin-left: 15px;
    color: ${theme.colors.shaman};
  `,
};
