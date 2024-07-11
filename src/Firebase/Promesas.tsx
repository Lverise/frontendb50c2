import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase"
import { Persona } from "@/Interfaces/iPersona";

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), persona);
}

export const obtenerPersonas = async()=>{
    let personas:Persona[] = []
    const querySnapshot = await getDocs(collection(db, "personas"));
    querySnapshot.forEach((doc) => {
        let persona:Persona = {
            rut:doc.data().rut,
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre
        }
        personas.push(persona)
    });
    return personas
}