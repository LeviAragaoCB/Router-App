import { useNavigate } from "react-router-dom";
import './Login.css'
import { InputField } from "../components/input/InputField";
import { useState } from 'react'

export const Login = () => {
    const navigate = useNavigate();
    const [ formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const login = e => {
        /* evita recarregar a página */
        e.preventDefault();
        console.log('logou');
        navigate('/home');
    }

    const handleEmail = (e) => {
        console.log(e.target.value)
    }

    const handleSenha = (e) => {
        console.log(e)
    }

    return (
        <main className="form-signin w-100 m-auto">
            <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
            <form onSubmit={login}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                
                <InputField
                    id='email'
                    label='Email'
                    type='email'
                    placeholder='name@example.com'
                    value={formData.email}
                    onChange={handleEmail}
                />
                <InputField 
                    id='senha'
                    label='Senha'
                    type='password'
                    placeholder='EX.:1234'
                    value={formData.senha}
                    onChange={handleSenha}
                />
                    
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
            </form>
        </main>
    )
}