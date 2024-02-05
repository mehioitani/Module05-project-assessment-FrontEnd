import { useState } from "react";
import { useAuthContext } from "./useAuthContext.jsx";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, username) => {
    setIsLoading(true);
    setError(null);   

    const response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });
    const json = await response.json();

    console.log(json); 

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update authContext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
