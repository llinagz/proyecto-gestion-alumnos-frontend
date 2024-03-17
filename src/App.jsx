import { Routes, Route } from "react-router-dom"
import { Login } from "./Login"
import { Dashboard } from "./Dashboard"
import { StudentNew } from "./StudentNew"

//Declaramos las diferentes rutas asociadas a un componente
export function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/student" element={<StudentNew />}/>
    </Routes>
  )
}