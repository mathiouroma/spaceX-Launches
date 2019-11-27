import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Initial from './components/Initial';
import FutureLaunches from './components/FutureLaunches';
import FutureLaunch from './components/FutureLaunch';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Historical from './components/Historical';
import History from './components/History';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql'
  //For deployment
  uri: '/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Route exact path="/" component={Login} />
          <Route exact path="/launces" component={Launches} />
          <Route exact path="/future_launches" component={FutureLaunches} />
          <Route exact path="/future_launch/:flight_number" component={FutureLaunch} />
          <Route exact path="/launch/:flight_number" component={Launch} />
          <Route exact path="/history" component={Historical} />
          <Route exact path="/history/:id" component={History} />
        </div>
        <div className="container-flex">
          <Route exact path="/Initial" component={Initial} />
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
