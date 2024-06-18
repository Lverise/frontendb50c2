import React from 'react'

interface Props{
    nombre:string
    apellido:string
    edad:number
    //al agregar un ? el parametro no es obligatorio (no da error)
    rol?:"estudiante"|"docente"
}


export const Perfil = (props:Props) => {
  return (
    <>
        <h1>Perfil</h1>
        <p>Nombre: {props.nombre}</p>
        <p>Apellido: {props.apellido}</p>
        <p>Edad: {props.edad}</p>
        { props.edad > 18 && <p>Si es mayor de edad</p>}
        { props.edad <= 18 && <p>No es mayor de edad</p>}
        {   props.rol!=undefined &&
            <p>Eres: {props.rol}</p> &&
            props.rol=="docente" &&
            <ul>
                <li>Subir Notas</li>
                <li>Reprobar Alumno</li>
                <li>Aprobar Alumno</li>
            </ul>
                }
    </>
  )
}
export default Perfil