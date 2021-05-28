import { FeelingsList } from "./FeelingsList";
import image from "../../assets/feelings/depressed.png";

const Feelings = () => {
  console.log(FeelingsList[0].image);

  return (
    <div className="main">
      <h2>How are you feeling today ?</h2>
      <div className="feelings">
        <div className="feel">
          <img src={image} alt="Depressed" />
          <p>Depressed</p>
        </div>
        <div className="feel">
          {/* <img src="./assets/sad.png" alt="Sad" /> */}
          <p>Sad</p>
        </div>
        <div className="feel">
          {/* <img src="./assets/happy.png" alt="Happy" /> */}
          <p>Happy</p>
        </div>
        <div className="feel">
          {/* <img src="./assets/anxious.png" alt="Anxious" /> */}
          <p>Anxious</p>
        </div>
        <div className="feel">
          {/* <img src="./assets/angry.png" alt="Angry" /> */}
          <p>Angry</p>
        </div>
      </div>
      <button className="button">
        <span>Submit </span>
      </button>
    </div>
  );
};

export default Feelings;
