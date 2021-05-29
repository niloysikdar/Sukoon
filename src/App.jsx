import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Feelings from "./components/Feelings/Feelings";
import Resources from "./components/Resources/Resources";
import Depression from "./components/Resources/Depression/Depression";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/feelings">
        <Feelings />
      </Route>
      <Route path="/resources" exact>
        <Resources />
      </Route>
      <Route path="/resources/depression">
        <Depression />
      </Route>
    </Switch>
  );
};

export default App;
