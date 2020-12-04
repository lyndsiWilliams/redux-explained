import React, { useState, useEffect } from 'react';

const UserEdit = props => {


  return (
    <div>
      <form>
        <input
          type='text'
          name='first_name'
          placeholder='Name'
          // onChange={handleChanges}
          // value={newUser.first_name}
        />
        <button type='submit'>Add a new user (POST)</button>
      </form>
      This component is id {props.id}
    </div>
  );
};

export default UserEdit;