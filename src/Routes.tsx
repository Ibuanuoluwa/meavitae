import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from "./pages";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
