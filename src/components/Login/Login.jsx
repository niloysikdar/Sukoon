import { useEffect } from "react";
import Sawo from "sawo";
import logo from "../../assets/login/logo.svg";
import "./Login.css";

const { REACT_APP_API_SAWO } = process.env;

const Login = () => {
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: REACT_APP_API_SAWO,
      onSuccess: (payload) => {
        console.log(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="main">
      <div className="splash">
        <img src={logo} alt="Logo" />
        <h2 className="title">Sukoon</h2>
      </div>
      <div className="login">
        <h2>Login</h2>
        <div id="sawo-container"></div>
      </div>
    </div>
  );
};

export default Login;
