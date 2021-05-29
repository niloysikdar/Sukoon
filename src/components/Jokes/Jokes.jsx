import classes from "./Jokes.module.css";

const Jokes = () => {
  return (
    <div className={classes.main}>
      <h2>Jokes</h2>
      <h3>A streak of good laughter to make you feel better.</h3>
      <p>
        Why did the student eat his homework? Because the teacher told him it
        was a piece of cake!
      </p>
      <div className={classes.button}>
        <h4>Once More</h4>
      </div>
    </div>
  );
};

export default Jokes;
