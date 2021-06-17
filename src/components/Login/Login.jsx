import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sawo from "sawo";
import logo from "../../assets/login/logo.svg";
import classes from "./Login.module.css";

const { REACT_APP_API_SAWO } = process.env;

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: REACT_APP_API_SAWO,
      onSuccess: (payload) => {
        console.log(payload);
        history.replace("/feelings");
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, [history]);

  return (
    <div className={classes.main_login}>
      <div className={classes.splash}>
        <img src={logo} alt="Logo" />
        <h2 className={classes.title}>Sukoon</h2>
      </div>
      <div className={classes.login}>
        <h2>Login</h2>
        <div className={classes.sawo_container} id="sawo-container"></div>
      </div>
    </div>
  );
};

export default Login;
