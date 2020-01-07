import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Orders} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
