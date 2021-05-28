import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
