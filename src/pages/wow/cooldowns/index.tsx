import React, { ReactElement, useState } from "react";
import Timeline from "./components/timeline";
import InputNumber from "components/input-number";
import styles from "./styles";

const Cooldowns = (): ReactElement => {
  const [encounterTimings, setEncounterTimings] = useState([]);
  const [encounterTime, setEncounterTime] = useState(330);
  const [cooldowns, setCooldowns] = useState({
    recklessness: 90,
    bladestorm: 90,
    spearOfBastion: 60,
  });
  return (
    <div css={styles.wrapper}>
      <div css={styles.encounterTime}>
        Encounter Time:
        <div>{encounterTime}</div>
        <div>
          {Math.floor(encounterTime / 60)} mins {encounterTime % 60} secs
        </div>
      </div>
      <InputNumber value={encounterTime} setValue={setEncounterTime} />
      {Object.keys(cooldowns).map((cd) => {
        return (
          <div key={cd}>
            {cd}: {cooldowns[cd]}: {Math.ceil(encounterTime / cooldowns[cd])}{" "}
            uses
          </div>
        );
      })}
      <br />
      <Timeline
        encounterTime={encounterTime}
        cooldowns={Object.values(cooldowns)}
      />
    </div>
  );
};

export default Cooldowns;
