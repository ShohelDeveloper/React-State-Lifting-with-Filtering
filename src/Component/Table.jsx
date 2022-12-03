import { useState } from "react";

const Tabel = ({ contacts }) => {
  const [filter, setFilter] = useState("All");

  const handelChange = (e) => {
    setFilter(e.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const searchCB = (contactsss) =>
    // console.log(contact)
    contactsss.name.includes(searchTerm) || contactsss.email.includes(searchTerm);

  let filterContacts = [];
  if (filter === "All") {
    filterContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filterContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }

  return (
    <>
      <div>
        <br />
        Filters:
        <select value={filter} onChange={handelChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          placeholder="Search Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>

        <tbody>
          {filterContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabel;
