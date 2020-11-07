// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
// Styling
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/edit/:id" component={UserEdit} />
        </Switch>
      </Router>
    </div>
  );
};


export default App;