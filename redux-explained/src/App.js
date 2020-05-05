// React
import React from 'react';
import { connect } from 'react-redux';
// Action
import { getUsers } from './actions';
// Styling
import './App.css';


// Pass props into the component to bring in the redux state
const App = props => {
  console.log("Props in App.js:", props)
  return (
    <div className="App">
      Check the console! <br/>
      <button onClick={props.getUsers}>Fetch Users</button>
      {props.users && !props.isFetching && props.users.map(users => (
        <div key={users.id}>{users.first_name} {users.last_name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  isFetching: state.isFetching
});

export default connect (
  mapStateToProps,
  { getUsers }
)(App);


/*

- Step 1 -
Import the following:

// "connects" the component to the redux store
import { connect } from 'react-redux';
// This is your action you'll be using in the component
import { getUsers } from './actions';


- Step 2 -
Connect the component to the redux store through the export
This is where the state and actions are connected to the component from the redux store
  
export default connect (mapStateToProps, { actions })(ComponentBeingExported)


- Step 3 -
Create the mapStateToProps function (see line 18)
This takes in the state from the redux store through the connect in the export
It literally maps the state to the props object in the component
- Make sure it is structured EXACTLY like your initialState object in your reducer

- Step 4 -
Pass props into the component

*/