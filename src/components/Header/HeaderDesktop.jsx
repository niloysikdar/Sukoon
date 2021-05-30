import classes from "./HeaderDesktop.module.css";
import { Link } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <div className={classes.header_desktop}>
      <div className={classes.logo}>
        <h2>Sukoon</h2>
      </div>
      <div className={classes.options}>
        <Link to="/activities2" style={{ textDecoration: "none" }}>
          <h2>Home</h2>
        </Link>
        <h2>Favourites</h2>
        <Link to="/resources" style={{ textDecoration: "none" }}>
          <h2>Resources</h2>
        </Link>
        <Link to="/test" style={{ textDecoration: "none" }}>
          <h2>Test</h2>
        </Link>
        <div className={classes.profile}></div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
