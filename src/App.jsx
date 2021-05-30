import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Feelings from "./components/Feelings/Feelings";
import Resources from "./components/Resources/Resources";
import Depression from "./components/Resources/Depression/Depression";
import Anxiety from "./components/Resources/Anxiety/Anxiety";
import Ptsd from "./components/Resources/Ptsd/Ptsd";
import Tellmore from "./components/Tellmore/Tellmore";
import Activities from "./components/Activities/Activities";
import Jokes from "./components/Jokes/Jokes";
import { Activitylist } from "./components/Activities/Activitylist";
import { Activitylist2 } from "./components/Activities/Activitylist2";
import Quotes from "./components/Quotes/Quotes";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/feelings">
        <Feelings />
      </Route>
      <Route path="/tellmore">
        <Tellmore />
      </Route>
      <Route path="/activities" exact>
        <Activities activitylist={Activitylist} />
      </Route>
      <Route path="/activities2" exact>
        <Activities activitylist={Activitylist2} />
      </Route>
      <Route path="/activities2/quotes">
        <Quotes />
      </Route>
      <Route path="/activities/jokes">
        <Jokes />
      </Route>
      <Route path="/resources" exact>
        <Resources />
      </Route>
      <Route path="/resources/depression">
        <Depression />
      </Route>
      <Route path="/resources/anxiety">
        <Anxiety />
      </Route>
      <Route path="/resources/ptsd">
        <Ptsd />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </Switch>
  );
};

export default App;
