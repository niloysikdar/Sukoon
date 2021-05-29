import { FeelingsList } from "./FeelingsList";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Feelings.css";

const Feelings = () => {
  const [current, setCurrent] = useState("");
  return (
    <div className="main">
      <h2>How are you feeling today ?</h2>
      <div className="feelings">
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
      <Link to="/resources">
        <button className="button">
          <span>Submit </span>
        </button>
      </Link>
      <Link to="/tellmore">
        <p className="tellmore">I want to tell more</p>
      </Link>
    </div>
  );
};

export default Feelings;
