import { Fragment, useState } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AboutPage from './app/pages/about/about';
import Dashboard from './app/pages/dashboard';
import DashboardAdmin from './app/pages/dashboard/dashboard-admin';
import DashboardUser from './app/pages/dashboard/dashboard-user';
import { Error404 } from './app/pages/errors';
import Home from './app/pages/home/home';
import { NavbarComponent } from './app/components/index';
import PostPage from './app/pages/post/post';
import { PrivateRoute } from './app/router';

function App() {
  const [auth, setAuth] = useState(true);
  console.log(auth);
  return (
    <Fragment>
      <Router>
        <NavbarComponent></NavbarComponent>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about/:id" component={AboutPage}></Route>
          <Route exact path="/post" component={PostPage}></Route>
          <PrivateRoute exact path="/admin" component={Dashboard} auth={auth}></PrivateRoute>
          <PrivateRoute exact path="/user" component={Dashboard} auth={auth}></PrivateRoute>
          <Route exact component={Error404}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
