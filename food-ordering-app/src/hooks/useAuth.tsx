import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Demo");

  const login = () => {
    const username = "admin";
    const password = "admin123";
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      setUsername(username);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("Demo");
  };

  return { isLoggedIn, username, login, logout };
};

export default useAuth;
