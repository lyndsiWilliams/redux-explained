// React
import React, { useState } from 'react';
import { connect } from 'react-redux';
// Actions
import { getUsers, addUser, editUser, deleteUser } from '../actions';
// Component
import UserForm from './UserForm';
import UserEdit from './UserEdit';


// Pass props into the component to bring in the redux state
const UserList = props => {
  console.log("Props in UserList.js:", props)
  
  const [editClick, setEditClick] = useState(false)
  const [editForm, setEditForm] = useState()

  const handleEdit = id => {
    setEditClick(true);
    setEditForm(<UserEdit id={id} />)
  };

  const handleDelete = id => {
    props.deleteUser(id);
  }


  return (
    <div>
      <UserForm addUser={props.addUser} />
      <button onClick={props.getUsers}>Fetch Users (GET)</button>
      {props.users && !props.isFetching && props.users.map(users => (
        <div key={users.id}>
          <p>{users.first_name}</p>
          <button onClick={() => handleEdit(users.id)}>Edit (PUT)</button>
          <button onClick={() => handleDelete(users.id)}>Delete (DELETE)</button>
        </div>
      ))}
      <br /><br />
      {editClick ? editForm : null}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  error: state.usersReducer.error,
  isFetching: state.usersReducer.isFetching
});


export default connect (
  mapStateToProps,
  { getUsers, addUser, editUser, deleteUser }
)(UserList);


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