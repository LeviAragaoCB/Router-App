import { useState } from "react";
import { Footer } from "../components/Footer"
import { InputField } from "../components/input/InputField"
import { Navbar } from "../components/Navbar"

export const Cadastro = () => {
  const [ formData, setFormData] = useState({
      });

  const fetchEnderecoByCep = async (e) => {
    console.log('Buscou da Api')
    const cep = e.target.value;

    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      console.log('dados api cep', data)
  }
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header text-center">
            <h4 className="mb-04">Cadastro de Úsuario</h4>
          </div>
          <div className="card-body">
            <form className="row g-3">

              <h5>Dados Pessoais</h5>

              <InputField
                id='nome'
                label='Nome'
                type='text'
                placeholder='Exemplo da Silva'
              // value={formData.senha}
              />

              <InputField
                id='emaildp'
                label='Emaildp'
                type='email'
                placeholder='name@example.com'
              // value={formData.email}
              />

              <InputField
                id='telefone'
                label='Telefone'
                type='number'
                placeholder='(85) 9 9999-9999'
              // value={formData.senha}
              />

              <h5 className="mt-4">Endereço</h5>

              <InputField
                // md={4}
                id='cep'
                label='Cep'
                type='text'
                placeholder='99999-999'
                value={formData.cep}
                // onChange={handleChange}
                onBlur={fetchEnderecoByCep}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
