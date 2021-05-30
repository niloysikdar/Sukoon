import DepressionPic from "../../../assets/details/depression_details.png";
import breathing from "../../../assets/details/breathing.png";
import { DepressionContent } from "./DepressionContent";
import classes from "./Depression.module.css";
import HeaderDesktop from "../../Header/HeaderDesktop";
import Chatbot from "../../Chatbot/Chatbot";

const Depression = () => {
  return (
    <div>
      <HeaderDesktop />
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <h2>Depression</h2>
            <img src={DepressionPic} alt="" />
          </div>
          {DepressionContent.map((item) => {
            return (
              <div className={classes.content} key={item.title}>
                <h2 className={classes.title}>{item.title}</h2>
                {item.description.map((des) => {
                  return (
                    <p className={classes.dsecription} key={des}>
                      {des}
                    </p>
                  );
                })}
              </div>
            );
          })}
          <div className={classes.button_wrapper}>
            <div className={classes.button}>
              <h3>Take Test</h3>
            </div>
          </div>
          <div className={classes.activities}>
            <h2>Suggested Activities</h2>
            <div className={classes.activity_card}>
              <img src={breathing} alt="" />
              <div className={classes.card_content}>
                <h3>Breathing exercise</h3>
                <p>It is a soothing exercise that relaxes mind and calms you</p>
              </div>
            </div>
            <div className={classes.activity_card}>
              <img src={breathing} alt="" />
              <div className={classes.card_content}>
                <h3>Breathing exercise</h3>
                <p>It is a soothing exercise that relaxes mind and calms you</p>
              </div>
            </div>
            <div className={classes.activity_card}>
              <img src={breathing} alt="" />
              <div className={classes.card_content}>
                <h3>Breathing exercise</h3>
                <p>It is a soothing exercise that relaxes mind and calms you</p>
              </div>
            </div>
          </div>
          <div className={classes.button_wrapper}>
            <div className={classes.button}>
              <h3>View All</h3>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Depression;
