import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import History from './components/History'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Scanner from './components/Scanner'
import ViewReceipt from './components/ViewReceipt'
import ConfirmReceipt from './components/ConfirmReceipt'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Welcome} />
            <Route path='/history' component={History} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/scan' component={Scanner} />
            <Route path='/view/:receiptId' component={ViewReceipt} />
            <Route path='/confirm/:receiptId' component={ConfirmReceipt} />
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

export default App;
