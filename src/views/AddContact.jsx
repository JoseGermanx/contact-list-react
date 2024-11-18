import React, { useContext } from "react";
import { ContactContext } from "../store/appContext";

const AddContact = () => {
  const { contactActions } = useContext(ContactContext);


  const agregarContacto = () => {
    contactActions({
      type: "add",
      payload: {
        name: "Juan",
        phone: "123456789",
        email: "email@email.com",
      },
    });
  }



    return <div>Formulario para agregar un nuevo contacto
      <button onClick={agregarContacto}>Agregar contacto</button>
    </div>;
  };


export default AddContact;
