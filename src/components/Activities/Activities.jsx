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
                    <div className={classes.box} key={ac.title}>
                      <img src={ac.image} alt="" />
                      <h3>{ac.title}</h3>
                      <p>{ac.description}</p>
                    </div>
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
