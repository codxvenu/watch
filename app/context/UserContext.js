// context/UserContext.js
"use client"
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [nav, setNav] = useState(false);

  return (
    <UserContext.Provider value={{ nav, setNav }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
