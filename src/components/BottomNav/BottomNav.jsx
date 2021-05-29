import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBell } from "@fortawesome/free-solid-svg-icons";
import classes from "./Bottomnav.module.css";

const BottomNav = () => {
  return (
    <div className={classes.bottomnav_mobile}>
      <FontAwesomeIcon className={classes.fas} icon={faArrowLeft} />
      <FontAwesomeIcon className={classes.fas} icon={faBell} />
    </div>
  );
};

export default BottomNav;
