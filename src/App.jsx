import { Routes, Route } from "react-router-dom"
import { Login } from "./Login"
import { Dashboard } from "./Dashboard"

//Declaramos las diferentes rutas asociadas a un componente
export function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  )
}