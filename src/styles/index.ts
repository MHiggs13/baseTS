import { css, SerializedStyles } from "@emotion/react";
import theme from "theme";
import "../app.css";

export default {
  app: css`
    background-color: ${theme.colors.colorFive};
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    .ant-layout {
      background-color: transparent;
    }
  `,
  wrapper: css`
    display: flex;
    flex-direction: column;

    button {
      width: 300px;
      margin-bottom: 10px;
    }
  `,
  cardWrapper: css`
    padding: 8px;
  `,
};
