import { useAuth } from "../components/useAuth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get("/dashboard");
        setUserName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    if (isAuthenticated) {
      fetchUserName();
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {

      document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      await axios.post("/logout");
      

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  return isAuthenticated ? (
    <div>
      Welcome {userName}! You are authenticated.
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>You are not authenticated.</div>
  );
};

export default Dashboard;
