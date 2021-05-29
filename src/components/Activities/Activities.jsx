import { Link } from "react-router-dom";
import { Activitylist } from "./Activitylist";
import classes from "./Activities.module.css";
import HeaderDesktop from "../Header/HeaderDesktop";

const Activities = () => {
  return (
    <div>
      <HeaderDesktop />
      <div className={classes.main}>
        {Activitylist.map((item) => {
          return (
            <div key={item.category} className={classes.wrapper}>
              <h2>{item.category}</h2>
              <div className={classes.container}>
                {item.activities.map((ac) => {
                  return (
                    <Link
                      to={ac.link}
                      style={{ textDecoration: "none" }}
                      key={ac.title}
                    >
                      <div className={classes.box}>
                        <img src={ac.image} alt="" />
                        <h3>{ac.title}</h3>
                        <p>{ac.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className={classes.button}>
                <h4>View All</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
