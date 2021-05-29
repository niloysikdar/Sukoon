import DepressionPic from "../../../assets/details/depression_details.png";
import breathing from "../../../assets/details/breathing.png";
import { DepressionContent } from "./DepressionContent";

const Depression = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="header">
          <h2>Depression</h2>
          <img src={DepressionPic} alt="" />
        </div>
        {DepressionContent.map((item) => {
          return (
            <div className="content">
              <h2 className="title">{item.title}</h2>
              {item.description.map((des) => {
                return <p className="dsecription">{des}</p>;
              })}
            </div>
          );
        })}
        <div className="button_wrapper">
          <div className="button">
            <h3>Take Test</h3>
          </div>
        </div>
        <div className="activities">
          <h2>Suggested Activities</h2>
          <div className="activity_card">
            <img src={breathing} alt="" />
            <div className="card_content">
              <h3>Breathing exercise</h3>
              <p>It is a soothing exercise that relaxes mind and calms you</p>
            </div>
          </div>
          <div className="activity_card">
            <img src={breathing} alt="" />
            <div className="card_content">
              <h3>Breathing exercise</h3>
              <p>It is a soothing exercise that relaxes mind and calms you</p>
            </div>
          </div>
          <div className="activity_card">
            <img src={breathing} alt="" />
            <div className="card_content">
              <h3>Breathing exercise</h3>
              <p>It is a soothing exercise that relaxes mind and calms you</p>
            </div>
          </div>
        </div>
        <div className="button_wrapper">
          <div className="button">
            <h3>View All</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depression;
