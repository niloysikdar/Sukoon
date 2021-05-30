import { Testdata } from "./Testdata";
import classes from "./Test.module.css";
import HeaderDesktop from "../Header/HeaderDesktop";

const Test = () => {
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
        <div className={classes.button}>
          <p>View Result</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
