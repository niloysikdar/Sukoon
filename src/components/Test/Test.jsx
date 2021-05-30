import { Testdata } from "./Testdata";
import classes from "./Test.module.css";
import HeaderDesktop from "../Header/HeaderDesktop";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const Test = () => {
  const history = useHistory();
  return (
    <div>
      <HeaderDesktop />
      <div className={classes.main}>
        <h2>Test for Anxiety</h2>
        <ul className={classes.quiz}>
          {Testdata.map((item) => {
            return (
              <li key={item.question}>
                <h4>{item.question}</h4>
                <ul className={classes.choices}>
                  {item.options.map((option) => {
                    return (
                      <li key={option}>
                        <label>
                          <input type="radio" name="question0" value="A" />
                          <span>{option}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <br />
              </li>
            );
          })}
        </ul>
        <div
          className={classes.button}
          onClick={(e) => {
            swal("You have 70% chance of anxiety", {
              icon: "warning",
            }).then(() => {
              history.replace("/activities2");
            });
          }}
        >
          <p>View Result</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
