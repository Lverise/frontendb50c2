import { obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/iPersona'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

export const Pagina4 = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //Traer listado de personas desde las promesas
        obtenerPersonas().then((personas)=>{
        //Meter el listado dentro de del estado
            setPersonas(personas)
        }).catch((e)=>{
            console.log(e)
            alert("Algo ocurrió")
        })
    },[])

  return (
    <>
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechaNacimiento}</td>
                                <td>{p.edad}</td>
                            </tr>
                    
                        )
                    })
                }
            </tbody>
        </Table>
    </>
  )
}

export default Pagina4