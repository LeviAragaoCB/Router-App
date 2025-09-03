import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Pages/Login.jsx';
import { Cadastro } from './Pages/Cadastro.jsx';
import { NotFound } from './Pages/NotFound.jsx';

// Versão 6.30.1 *Angelo acha que é a melhor versão.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '*',
    element: <NotFound />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} /> 

    {/* Versão 7.8.2 
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        404
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
  </StrictMode>,
)
