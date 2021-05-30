import { Testdata } from "./Testdata";

const Test = () => {
  return (
    <div>
      <div className="main">
        <h2>Test for Anxiety</h2>
        <ul className="quiz">
          {Testdata.map((item) => {
            return (
              <li key={item.question}>
                <h4>{item.question}</h4>
                <ul className="choices">
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
              </li>
            );
          })}
        </ul>

        <button className="view-results">View Results</button>
      </div>
    </div>
  );
};

export default Test;
