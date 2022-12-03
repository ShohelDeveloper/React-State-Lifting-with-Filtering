import { useState } from "react";
import ContactForm from "./Component/ContactForm";
import Tabel from "./Component/Table";




function App() {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
    console.log(contact);
    console.log(contacts);
  };
  // const getData = (values) => {
  //   console.log(values.name);
  //   console.log(values.email);
  //   console.log("Calling getData Func");
  // };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getContact={getContact} />
      <Tabel contacts={contacts} />
    </div>
  );
}

export default App;
