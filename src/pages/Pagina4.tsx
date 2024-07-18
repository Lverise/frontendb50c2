import { obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/iPersona'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


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
                    <th>Acción</th>
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
                                <td>
                                    <Link href={{pathname:"Pagina5",query:{key:p.key}}}></Link>
                                    <Button variant='warning'><FaRegEdit color='black'/></Button>
                                    <Button variant='danger'><RiDeleteBin5Line color='black'/></Button>

                                </td>
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