// src/context/UserContext.js
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  // Carrega do localStorage na primeira vez
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log('useEffect_context', stored);
    setUsuarios(stored);
  }, []);

  // Adiciona usuário
  const addUsuario = (novoUsuario) => {
    const updated = [...usuarios, novoUsuario];
    setUsuarios(updated);
    localStorage.setItem("usuarios", JSON.stringify(updated));
  };

  return (
    <UserContext.Provider value={{ usuarios, addUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para facilitar o uso
export const useUsuarios = () => useContext(UserContext);
