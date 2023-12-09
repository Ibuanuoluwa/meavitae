import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, FeaturesPage, AboutPage } from "./pages";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/features" component={FeaturesPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
