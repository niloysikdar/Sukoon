import classes from "./HeaderDesktop.module.css";

const HeaderDesktop = () => {
  return (
    <div className={classes.header_desktop}>
      <div className={classes.logo}>
        <h2>Sukoon</h2>
      </div>
      <div className={classes.options}>
        <h2>Home</h2>
        <h2>Favourites</h2>
        <h2>Resources</h2>
        <h2>Test</h2>
        <div className={classes.profile}></div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
