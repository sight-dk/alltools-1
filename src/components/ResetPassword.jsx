import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      setErrorMessage("Invalid reset password link.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("https://saturn-sight-dk.vercel.app/api/reset-password", {
        token,
        new_password: newPassword,
      });

      navigate("/")
      
    } catch (error) {
        setErrorMessage("Invalid token");
    }
    
  };
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-main-bg">
        <div className="bg-white px-10 py-20 rounded-2xl drop-shadow-md border-1 border-grey-200 w-10/12 h-8/12">
          <h1 className="text-3xl font-semibold">Reset Password</h1>
          <form onSubmit={handleResetPassword} className="mt-8">
            <div>
              <label className="text-15 font-medium">New Password</label>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent"
                placeholder="Enter your new password"
              ></input>
            </div>
            <div>
              <label className="text-15 font-medium">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 h-12 mb-4 bg-transparent"
                placeholder="Confirm your new password"
              ></input>
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.97] active: duration-75 hover:scale-[1.01 ease-in-out] transition-all py-3 rounded-md bg-gradient-to-tr from-green-300 to-blue-500 drop-shadow-md text-white text-14 font-bold"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white'>
           
           <div className="w-60 h-60 bg-gradient-to-tr from-green-300 to-blue-500 rounded-full animate-bounce"></div> 
           <div className = "w-1/2 h-1/2 absolute bottom-1 bg-white/10 backdrop-blur"></div>
     
           </div>
           </div>
  )
}