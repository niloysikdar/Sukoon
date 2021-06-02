import { FeelingsList } from "./FeelingsList";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Feelings.module.css";

const Feelings = () => {
  const [current, setCurrent] = useState("");
  return (
    <div className={classes.main}>
      <h2>How are you feeling today ?</h2>
      <div className={classes.feelings}>
        {FeelingsList.map((item) => {
          return (
            <div
              className={current === item.tag ? "feel active" : "feel"}
              key={item.image}
              onClick={(e) => {
                setCurrent(item.tag);
              }}
            >
              <img src={item.image} alt={item.tag} />
              <p>{item.tag}</p>
            </div>
          );
        })}
      </div>
      <Link to={current === "Happy" ? "/activities" : "/activities2"}>
        <button className={classes.button}>
          <span>Submit </span>
        </button>
      </Link>
      <Link to="/tellmore">
        <p className={classes.tellmore}>I want to tell more</p>
      </Link>
    </div>
  );
};

export default Feelings;
