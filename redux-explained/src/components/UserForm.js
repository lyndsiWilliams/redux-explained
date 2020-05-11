// React
import React, { useState } from 'react';


const UserForm = props => {
  const [newUser, setNewUser] = useState({
    name: '',
    id: Date.now()
  });

  const handleSubmit = e => {
    e.preventDefault();
  };
}