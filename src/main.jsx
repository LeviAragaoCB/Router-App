import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Cadastro } from './pages/Cadastro.jsx';
import { NotFound } from './pages/NotFound.jsx';
import './index.css'
import { Home } from './pages/Home.jsx';
import { Contato } from './pages/Contato.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contato',
    element: <Contato />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
