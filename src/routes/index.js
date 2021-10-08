import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Prom from "../pages/Prom";
import Wedding from "../pages/Wedding";
import Confraternization from "../pages/Confraternization";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/prom">
        <Prom />
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
