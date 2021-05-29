import { FeelingsList } from "./FeelingsList";

const Feelings = () => {
  return (
    <div className="main">
      <h2>How are you feeling today ?</h2>
      <div className="feelings">
        {FeelingsList.map((item) => {
          return (
            <div className="feel" key={item.image}>
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
