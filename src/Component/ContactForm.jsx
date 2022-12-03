import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, group } = values;

  const handelChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    getContact(values);
    setValues({ ...CONTACT_FORM_INIT_STATE });

    //   console.log(values)
  };
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handelChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handelChange}
        />
      </div>
      <div>
        <label htmlFor="group">Group:</label>
        <select
          name="group"
          id="group"
          value={group}
          onChange={handelChange}
        >
          <option value="">Select Group</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <input type="submit" value={"Create New Contact"} />
    </form>
  );
};

export default ContactForm;
