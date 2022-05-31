import { css } from "@emotion/react";
import theme from "theme";

export default {
  wrapper: css`
    display: flex;
    justify-content: center;
    margin-top: 15px;
  `,
  button: css`
    padding: 10px;
    background-color: ${theme.colors.colorOne};
    border: 1px solid ${theme.colors.colorOne};
    border-radius: 4px;
  `,
};
