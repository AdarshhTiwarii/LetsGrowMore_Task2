// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand-name">UniQ</div>
        <button onClick={getUsers} className="get-users-button">
          Get Users
        </button>
      </nav>
      <div className="user-card-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default App;
