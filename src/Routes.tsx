import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HomePage,
  FeaturesPage,
  AboutPage,
  PartnersPage,
  ArticlesPage,
  PricingPage,
  RegisterPage,
  LoginPage,
  ResetPasswordPage,
} from "./pages";
import AccountPage from "./pages/account/AccountPage";
import AccountFilesPage from "./pages/account/AccountFilesPage";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/features" component={FeaturesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/partners" component={PartnersPage} />
        <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/pricing" component={PricingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/reset-password" component={ResetPasswordPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route
          exact
          path="/account/folder/:folderId"
          component={AccountFilesPage}
        />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
