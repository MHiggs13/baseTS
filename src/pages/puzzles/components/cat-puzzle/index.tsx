import React, { ReactElement, useState } from "react";
import catSvg from "assets/svg/cat.svg";
import Button from "components/button";
import styles from "./styles";

const Puzzles = (): ReactElement => {
  const [guessMessage, setGuessMessage] = useState("");
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
  ]);

  const cat = <img css={styles.catImage} src={catSvg} alt="cat" />;

  const onNewMorning = () => {
    let catIndex = 0;
    boxes.forEach((box, index) => {
      if (box) catIndex = index;
    });

    if (catIndex === 0) {
      catIndex = 1;
    } else if (catIndex === boxes.length - 1) {
      catIndex = boxes.length - 2;
    } else {
      const max = 2;
      const randomNum = Math.floor(Math.random() * max);
      if (randomNum === 0) catIndex = catIndex - 1;
      if (randomNum === 1) catIndex = catIndex + 1;
    }

    const newBoxes = boxes.map((_, index) => catIndex === index);

    setBoxes(newBoxes);
  };

  const guessCat = () => {
    let localBoxes = boxes;

    const goToNewMorning = () => {
      let catIndex = 0;
      localBoxes.forEach((box, index) => {
        if (box) catIndex = index;
      });

      if (catIndex === 0) {
        catIndex = 1;
      } else if (catIndex === localBoxes.length - 1) {
        catIndex = boxes.length - 2;
      } else {
        const max = 2;
        const randomNum = Math.floor(Math.random() * max);
        if (randomNum === 0) catIndex = catIndex - 1;
        if (randomNum === 1) catIndex = catIndex + 1;
      }

      localBoxes = localBoxes.map((_, index) => catIndex === index);
    };

    const leftGuess = 0 + 1;
    const midGuess = (localBoxes.length - 1) / 2;
    const rightGuess = localBoxes.length - 2;

    let guess = midGuess;
    let prevPrevGuess = rightGuess;
    let prevGuess = rightGuess;
    let guessCount = 0;

    while (!localBoxes[guess]) {
      guessCount += 1;

      if (prevGuess === midGuess) {
        if (prevPrevGuess === leftGuess) {
          guess = rightGuess;
        } else {
          guess = leftGuess;
        }
      } else {
        if (prevGuess === leftGuess) {
          if (prevPrevGuess === midGuess) {
            guess = leftGuess;
          } else {
            guess = midGuess;
          }
        } else {
          if (prevPrevGuess === midGuess) {
            guess = rightGuess;
          } else {
            guess = midGuess;
          }
        }
      }
      prevPrevGuess = prevGuess;
      prevGuess = guess;
      goToNewMorning();
    }

    let tempGuess = `You caught the cat in box number ${
      guess + 1
    } it took ${guessCount} guesses to catch the cat`;
    setGuessMessage(tempGuess);
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.puzzleText}>
        <div>
          A cat is hiding in one of five boxes that are lined up in a row.{" "}
        </div>
        <div>
          The boxes are numbered 1 to 5. Each night the cat hides in an adjacent
          box, exactly one number away.
        </div>
        <div>
          Each morning you can open a single box to try to find the cat.{" "}
        </div>
        <div>
          Can you win this game of hide and seek? What is your strategy to find
          the cat? What if there are n boxes? Watch the video for the solution.
        </div>
        <a href="https://www.youtube.com/watch?v=yZyx9gHhRXM">Video</a>
      </div>
      <div css={styles.separator} />
      <div css={styles.puzzleDemo}>
        {boxes.map((box, index) => (
          <div css={styles.box} key={index}>
            {box && cat}
          </div>
        ))}
        <Button text="Next Morning" onClick={onNewMorning} />
      </div>
      <Button text="Guess Cat" onClick={guessCat} />
      {guessMessage && (
        <div>
          <br /> <div>{guessMessage}</div>
        </div>
      )}
    </div>
  );
};

export default Puzzles;
