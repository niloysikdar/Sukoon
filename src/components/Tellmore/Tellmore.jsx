import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Tellmore.module.css";

const categories = [
  "Fatigue",
  "Sadness",
  "Insomnia",
  "Fear",
  "Hopelessness",
  "Trembling",
  "Tiredness",
  "Anger",
  "Guilt",
  "Breathing rapidly",
];

const Tellmore = () => {
  const [current, setCurrent] = useState("");
  return (
    <div className={classes.main}>
      <h2>Which of the following are you experiencing?</h2>
      <div className={classes.categories}>
        {categories.map((item) => {
          return (
            <div
              className={
                current === item ? classes.category_active : classes.category
              }
              key={item}
              onClick={(e) => {
                setCurrent(item);
              }}
            >
              <h2>{item}</h2>
            </div>
          );
        })}
      </div>
      <Link to="/activities" style={{ textDecoration: "none" }}>
        <div className={classes.button}>
          <h2>Submit</h2>
        </div>
      </Link>
    </div>
  );
};

export default Tellmore;
