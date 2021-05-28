import logo from "../../assets/logo.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="main">
      <div className="splash">
        <img src={logo} alt="Logo" />
        <h2 className="title">Sukoon</h2>
      </div>
      <div className="login">
        <h2>Login</h2>
        <div className="sawo-container"></div>
      </div>
    </div>
  );
};

export default Login;
