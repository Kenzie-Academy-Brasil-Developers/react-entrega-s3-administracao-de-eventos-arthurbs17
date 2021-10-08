import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Graduation from "../pages/Graduation";
import Wedding from "../pages/Wedding";
import Confraternization from "../pages/Confraternization";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/confraternization">
        <Confraternization />
      </Route>
    </Switch>
  );
};

export default Routes;
