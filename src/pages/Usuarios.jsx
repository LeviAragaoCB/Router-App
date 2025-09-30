import React, { useEffect, useState } from 'react';
import { useUsuarios } from '../context/UserContext';

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  /* 
  const { addUsuario } = useUsuarios(); */
  const { usuariosLocal } = useUsuarios(); // ✅ vem do contexto

  useEffect(() => {
    const loadUsers = () => {
      const stored = usuariosLocal || [];
      setUsuarios(stored);
    };

    loadUsers();

    // Escuta alterações do localStorage em outra aba
    window.addEventListener('storage', loadUsers);

    return () => window.removeEventListener('storage', loadUsers);
  }, []);


  return (
    <div className="container mt-5">
      <h3>Lista de Usuários Cadastrados</h3>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped mt-3">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CEP</th>
                <th>Rua</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{index + 1|| '-'}</td>
                  <td>{usuario.nome || '-'}</td>
                  <td>{usuario.email || '-'}</td>
                  <td>{usuario.telefone || '-'}</td>
                  <td>{usuario.cep || '-'}</td>
                  <td>{usuario.rua || '-'}</td>
                  <td>{usuario.bairro || '-'}</td>
                  <td>{usuario.cidade || '-'}</td>
                  <td>{usuario.estado || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
