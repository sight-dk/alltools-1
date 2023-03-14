import { useAuth } from "../components/useAuth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.get('https://saturn-sight-dk.vercel.app/api/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        const userInfo = response.data;
        setUserId(userInfo.user_id);
        setName(userInfo.name);
      })
      .catch(error => {
        alert("notlogged")
      });
  }, []);
  
  const handleLogout = () => {

   
    // EVT FJERNE ENDPOINT OG KUN FJERNE COOKIEN LOCALLY.
    const token = localStorage.getItem('token');
    //console.log(token)
    axios.post('https://saturn-sight-dk.vercel.app/api/logout', null, {
      headers: {
        Authorization : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    
      .then(response => {
        alert("Logged out successfully");
        localStorage.removeItem('token'); // remove the token from localStorage
        navigate("/"); // refresh the page to redirect to the login page
      })
      .catch(error => {
        //console.log(error);
      });
  };
  
  return (
    <div>
      <h1>User Info</h1>
      {userId && name && (
        <div>
          <p>User ID: {userId}</p>
          <p>Name: {name}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default Dashboard;
