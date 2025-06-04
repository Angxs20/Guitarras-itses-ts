import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//Tarea resolver, pista: es sobre la restriccion de datos, es otro tipo de css
import App from './App.tsx'

//assertion not null
createRoot(document.getElementById('root')! ).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//HTMLELEMENT ES UNA MANERA DE CORREGIRLO
// createRoot(document.getElementById('root')as HTMLElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,