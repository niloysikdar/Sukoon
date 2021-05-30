// import { useState, useEffect } from "react";
import classes from "./Quotes.module.css";
import HeaderDesktop from "../Header/HeaderDesktop";

const Quotes = () => {
  //   const [quote, setQuote] = useState("");
  //   const [author, setAuthor] = useState("");
  //   useEffect(() => {
  //     fetchQuote();
  //   }, []);

  //   const fetchQuote = () => {
  //     fetch("https://zenquotes.io/api/random")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         // setQuote(data["q"]);
  //         // setAuthor(data["a"]);
  //       });
  //   };
  return (
    <div>
      <HeaderDesktop />
      <div className={classes.main}>
        <h2>Motivational Quotes</h2>
        <h3>Always stay motivated</h3>
        <p>
          Be happy in the moment, that's enough. Each moment is all we need, not
          more.
        </p>
        <p>Mother Teresa</p>
        <div className={classes.button}>
          <h4>Once More</h4>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
