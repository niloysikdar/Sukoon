import { useState, useEffect } from "react";
import classes from "./Jokes.module.css";
import HeaderDesktop from "../Header/HeaderDesktop";

const Jokes = () => {
  const [part1, setJoke1] = useState("");
  const [part2, setJoke2] = useState("");
  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,sexist")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.type === "twopart") {
          setJoke1(data.setup);
          setJoke2(data.delivery);
        } else {
          setJoke1(data.joke);
          setJoke2("");
        }
      });
  };
  return (
    <div>
      <HeaderDesktop />
      <div className={classes.main}>
        <h2>Jokes</h2>
        <h3>A streak of good laughter to make you feel better.</h3>
        <p>{part1}</p>
        {part2 && <p>{part2}</p>}
        <div className={classes.button} onClick={fetchJoke}>
          <h4>Once More</h4>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
