import Perfil from "./Componentes/Perfil";

export default function Home() {
  return (
    <>
     <p>Hola</p>
     <p>Chao</p>
     <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="docente"/>
     <Perfil nombre="José" apellido="Pérez" edad={15}/>
    </>
  
  );

}