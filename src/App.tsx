import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';
import OurMission from './components/OurMission';
import OurProducts from './components/OurProducts';
import GlobalNav from './components/GlobalNav';
import BuddhaBackground from './components/BuddhaBackground';

const App: React.FC = () => {
  return (
    <Router>
      <BuddhaBackground />
      <GlobalNav />
      <Layout>
        <Switch>
          <Route path="/inner-crunch" exact component={AboutUs} />
          <Route path="/inner-crunch/mission" component={OurMission} />
          <Route path="/inner-crunch/products" component={OurProducts} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;