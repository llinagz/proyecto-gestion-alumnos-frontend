import { Link } from "react-router-dom"

export function Header() {
    return(
        <>
            <p>
                <Link to={'/dashboard'}><span>Listado</span></Link>
                <Link to={'/student'}><span>Nuevo</span></Link>
                <span>Cerrar sesión</span>
            </p>
        </>
    )
}