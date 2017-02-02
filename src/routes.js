import React from 'react';
import {IndexRoute, Route} from 'react-router';
// import container components
import App from './components/App';
import HomePage from './components/Home/HomePage';
import SignUpPage from './components/SignUp/SignUpPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/sign-up" component={SignUpPage}/>
  </Route>
);
