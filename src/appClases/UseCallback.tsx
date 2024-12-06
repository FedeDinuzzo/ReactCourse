// Objetivo: se utiliza para memorizar una instancia de una funcion
// Hace que un hijo no renderice

// Ejemplo:
// Supongamos que tenes un numero de telefono al que llamas con frecuencia.
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono
// A menos que el numero cambie siempre utilizo el mismo contacto.

import { useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: { phone: string }) => void;
}

const ContactCard = ({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando contacto ${contact.name}`);

  return (
    <>
      <div>
        <h3>{contact.name}</h3>
        <p>telefono: {contact.phone}</p>
        <button onClick={() => onCall({ phone: contact.phone })}>Llamar</button>
      </div>
    </>
  );
};

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Juan",
      phone: "123456",
    },
    {
      id: 2,
      name: "Pedro",
      phone: "654321",
    },
    {
      id: 3,
      name: "Maria",
      phone: "987654",
    },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback((phone: { phone: string }) => {
    setLog(`Llamando a ${phone.phone}`);
  }, []);

  const addContact = () => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(1000000 + Math.random() * 9000000)}`,
    };

    setContacts([...contacts, newContact]);
  };

  return (
    <>
      <h2>Phone Book</h2>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}

      <button onClick={addContact}>Agregar Contacto</button>
      <p>{log}</p>
    </>
  );
};
