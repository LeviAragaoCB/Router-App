import { useState, useRef } from 'react';
import { InputField } from '../components/input/InputField';
import { formatCep, formatTelefone } from '../util/Util';
import { useUsuarios } from '../context/UserContext';

export const Cadastro = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({});
  const { addUsuario } = useUsuarios(); // ✅ vem do contexto

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;

    if (id === 'cep') newValue = formatCep(value);
    if (id === 'telefone') newValue = formatTelefone(value);

    setFormData({
      ...formData,
      [id]: newValue
    });
  };

  const fetchEnderecoByCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setFormData({
          ...formData,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUsuario(formData); // ✅ salva no contexto + localStorage
    alert("Usuário cadastrado com sucesso!");
    formRef.current.reset();
    setFormData({});
  };

  return (
    <div className="container mt-5 d-flex jsutify-content-center align-items-center">
      <div className="card shadow-lg">
        <div className="card-header text-center">
          <h4 className="mb-0">Cadastro de Usuário</h4>
        </div>
        <div className="card-body">
          <form className="row g-3" onSubmit={handleSubmit} ref={formRef}>
            {/* Dados pessoais */}
            <h5>Dados Pessoais</h5>

            <InputField md={6} id='nome' label='Nome' type='text'
              value={formData.nome || ''} onChange={handleChange} required />

            <InputField md={6} id='email' label='Email' type='text'
              value={formData.email || ''} onChange={handleChange} required />

            <InputField md={4} id='telefone' label='Telefone' type='text'
              value={formatTelefone(formData.telefone || '')}
              onChange={handleChange} required />

            <hr />

            {/* Endereço */}
            <h5 className="mt-4">Endereço</h5>

            <InputField md={4} id='cep' label='CEP' type='text'
              value={formatCep(formData.cep || '')}
              onChange={handleChange}
              onBlur={fetchEnderecoByCep} required />

            <InputField md={8} id='rua' label='Rua' type='text'
              value={formData.rua || ''} onChange={handleChange} required />

            <InputField md={6} id='bairro' label='Bairro'
              value={formData.bairro || ''} onChange={handleChange} required />

            <InputField md={6} id='cidade' label='Cidade'
              value={formData.cidade || ''} onChange={handleChange} required />

            <InputField md={2} id='estado' label='Estado'
              value={formData.estado || ''} onChange={handleChange} required />

            <div className="col-12">
              <button type="submit" className="btn btn-success w-100">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};