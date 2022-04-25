import { css, SerializedStyles } from "@emotion/react";
import theme from "theme";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    height: 1400px;
  `,
  timeline: css`
    width: 80vw;
    height: 5px;
    background-color: ${theme.colors.warrior};
    margin-top: 10px;
    margin-bottom: 10px;
  `,
  timelineEvents: css`
    display: flex;
    flex-direction: row;
    height: 16px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  `,
  eventNotation(props): SerializedStyles {
    return css`
      height: 16px;
      width: 3px;
      background-color: ${props.color};
      margin-left: ${props.separation}%;
    `;
  },
};
