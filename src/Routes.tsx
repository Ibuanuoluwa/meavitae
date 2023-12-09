import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HomePage,
  FeaturesPage,
  AboutPage,
  PartnersPage,
  ArticlesPage,
} from "./pages";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/features" component={FeaturesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/partners" component={PartnersPage} />
        <Route exact path="/articles" component={ArticlesPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
