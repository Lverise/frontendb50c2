import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FormGroup, FormLabel } from 'react-bootstrap'
import { useState } from "react"
import { Persona } from "@/Interfaces/iPersona"
import { registrarPersona } from "@/Firebase/Promesas"



const initialState:Persona = {
    apellido:"",
    correo:"",
    edad:0,
    fechaNacimiento:"",
    nombre:"",
    rut:""
}

export const Pagina3 = () => {
    const [persona, setPersona] = useState<Persona>(initialState)
  
    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
        console.log(persona)
    }
  const registrar = ()=>{
    registrarPersona(persona).then(()=>{
        alert("Se registró con éxito")
    }).catch((e)=>{
        console.log(e);
        alert("Algo ocurrió")
    })
  }


    return (
    <>
    <FormGroup>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su nombre'
        name="nombre"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
    </FormGroup>
    <FormGroup>
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su apellido'
        name="apellido"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
    </FormGroup>
    <FormGroup>
        <Form.Label>Rut:</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su rut'
        name="rut"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
    </FormGroup>
    <FormGroup>
        <Form.Label>Correo:</Form.Label>
        <Form.Control type='email' placeholder='Ingrese su correo'
        name="correo"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
    </FormGroup>
    <FormGroup>
        <Form.Label>Fecha Nacimiento:</Form.Label>
        <Form.Control type='date' placeholder='Ingrese su Fecha de nacimiento'
        name="fechaNacimiento"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
    </FormGroup>
    <FormGroup>
        <Form.Label>Edad:</Form.Label>
        <Form.Control type='number' placeholder='Ingrese su edad'
        name="edad"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
    </FormGroup>
    <Button type='button' variant='success'
    onClick={registrar}>Registrar</Button>
    </>
)
}
export default Pagina3