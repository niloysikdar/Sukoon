import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Feelings from "./components/Feelings/Feelings";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/feelings">
        <Feelings />
      </Route>
    </Switch>
  );
};

export default App;
