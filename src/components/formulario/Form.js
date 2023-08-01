import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import contactImage from '../img/contact-image.png';

const endpoint = 'http://localhost:8000/api';

function Formu() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData)

    // return
    // //const formData = new FormData()

    // console.log(formData)
    // return

    // const name = formData.get("name");
    // const email = formData.get("email");
    // const phone = formData.get("phone");
    // const message = formData.get("message");

    const response = await axios.post(endpoint + "/insert-persona", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    if (response.status === 200) {
      alert("Form submitted successfully!");
    } else {
      console.log(response)
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <section className="home5">
        <img src={contactImage} className="fondo_home5" alt="First slide"/>
        <div className="form_encabezado">
          <h1 className="form_tit">Get in touch</h1>
          <h1 className="form_sub">We are hiring!</h1>
        </div>
        <div className="formula" id="contacto1">
          <form action="post" onSubmit={handleSubmit} className="formulario"><br />
            <input type="text" className="texto_form" name="name" id="name" placeholder="Name"    onChange={handleChange}/><br />
            <input type="text" className="texto_form" name="email" id="email" placeholder="Email" onChange={handleChange}/><br />
            <input type="text" className="texto_form" name="phone" id="phone" placeholder="Phone" onChange={handleChange}/><br />
            <textarea name="message" className="area_text" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} onChange={handleChange}/><br />
            <input type="submit" value="Send" className="boton_form" />
          </form>
        </div>
        <div className="trazo" />
      </section>
    </>
  );
}

export default Formu;