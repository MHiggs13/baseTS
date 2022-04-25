import React, { ReactElement } from "react";
import styles from "./styles";

interface IProps {
  encounterTime: number;
  cooldowns: number[];
}

const Timeline = ({ encounterTime, cooldowns }: IProps): ReactElement => {
  const colors = ["red", "green", "blue", "purple", "orange"];
  return (
    <div css={styles.wrapper}>
      {cooldowns.map((cd, cdIndex) => {
        const separation = Math.ceil((cd / encounterTime) * 100);
        const uses = Math.ceil(encounterTime / cd);
        const array = [...Array(uses).keys()];
        const color = colors[cdIndex % colors.length];

        return (
          <div css={styles.timeline} key={cdIndex}>
            <div css={styles.timelineEvents}>
              {array.map((_, index) => (
                <div
                  key={index}
                  css={styles.eventNotation({
                    separation: index === 0 ? 0 : separation,
                    color,
                  })}
                ></div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
