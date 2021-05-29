import { Activitylist } from "./Activitylist";

const Activities = () => {
  return (
    <div className="main">
      {Activitylist.map((item) => {
        return (
          <div key={item.category}>
            <h2>{item.category}</h2>
            <div class="container">
              {item.activities.map((ac) => {
                return (
                  <div class="box" key={ac.title}>
                    <img src={ac.image} alt="" />
                    <h3>{ac.title}</h3>
                    <p>{ac.description}</p>
                  </div>
                );
              })}
            </div>
            <div class="button">
              <h4>View All</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
