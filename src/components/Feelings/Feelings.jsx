import { FeelingsList } from "./FeelingsList";
import { useState } from "react";
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
      <button className="button">
        <span>Submit </span>
      </button>
    </div>
  );
};

export default Feelings;
