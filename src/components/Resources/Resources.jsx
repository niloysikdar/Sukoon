import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBell } from "@fortawesome/free-solid-svg-icons";
import { ResoucesList } from "./ResoucesList";
import "./Resources.css";

const Resources = () => {
  return (
    <div>
      <div className="header_mobile">
        <FontAwesomeIcon icon={faArrowLeft} />
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="bottomnav_mobile">
        <FontAwesomeIcon icon={faArrowLeft} />
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="header_desktop">
        <div className="logo">
          <h2>Sukoon</h2>
        </div>
        <div className="options">
          <h2>Home</h2>
          <h2>Favourites</h2>
          <h2>Resources</h2>
          <h2>Test</h2>
          <div className="profile"></div>
        </div>
      </div>
      <div className="main">
        <div className="categories">
          {ResoucesList.map((item) => {
            return (
              <div className="category" key={item.tag}>
                <img src={item.image} alt={item.tag} />
                <h2>{item.tag}</h2>
              </div>
            );
          })}
        </div>
        <h3 className="para">
          To know about other mental health issues, talk to our chatbot:
        </h3>
        <button className="button">Go to Chatbot</button>
      </div>
    </div>
  );
};

export default Resources;
