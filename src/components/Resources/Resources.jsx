import { Link } from "react-router-dom";
import { ResoucesList } from "./ResoucesList";
import classes from "./Resources.module.css";
import HeaderMobile from "../Header/HeaderMobile";
import BottomNav from "../BottomNav/BottomNav";
import HeaderDesktop from "../Header/HeaderDesktop";

const Resources = () => {
  return (
    <div>
      <HeaderMobile />
      <BottomNav />
      <HeaderDesktop />
      <div className={classes.main}>
        <div className={classes.categories}>
          {ResoucesList.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.tag}
                style={{ textDecoration: "none" }}
              >
                <div className={classes.category}>
                  <img src={item.image} alt={item.tag} />
                  <h2>{item.tag}</h2>
                </div>
              </Link>
            );
          })}
        </div>
        <h3 className={classes.para}>
          To know about other mental health issues, talk to our chatbot:
        </h3>
        <button className={classes.button}>Go to Chatbot</button>
      </div>
    </div>
  );
};

export default Resources;
