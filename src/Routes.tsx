import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, Features } from "./pages";


function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/features" component={Features} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
