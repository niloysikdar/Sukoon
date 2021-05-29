import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBell } from "@fortawesome/free-solid-svg-icons";
import classes from "./HeaderMobile.module.css";

const HeaderMobile = () => {
  return (
    <div className={classes.header_mobile}>
      <FontAwesomeIcon className={classes.fas} icon={faArrowLeft} />
      <FontAwesomeIcon className={classes.fas} icon={faBell} />
    </div>
  );
};

export default HeaderMobile;
