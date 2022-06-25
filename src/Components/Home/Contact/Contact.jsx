import React from "react";
import "./Contact.scss";
import Button from '../../General/Button/Button'

const Contact = () => {
  const [ageInput, setAgeInput] = React.useState('')

  function handleAgeInput(evt){
    let value = evt.target.value
    value = +value
    if(typeof(value) ==  "number" && !isNaN(value)) setAgeInput(value);
  }

  return <section className="contact py-5 site-container d-flex justify-content-between align-items-center">
    <div className="contact__left">
    <h2 className="contact__left--title mb-5">Контакты</h2>
    <p className="contact__left--desc mb-5">Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. </p>
    <div className="d-flex align-items-center gap-4 mb-4">
      <p className="contact__email"><i className="icon-email"></i></p>
      <div>
        <h4 className="mb-2 text-white-50 fs-6">Say Hi!</h4>
        <a href="mailto:mail@example.com" className="text-decoration-none text-white">mail@example.com</a>
      </div>
    </div>
    <div className="d-flex align-items-center gap-4 mb-4">
      <p className="contact__phone"><i className="icon-phone"></i></p>
      <div>
        <h4 className="mb-2 text-white-50 fs-6">Let’s talk</h4>
        <a href="tel:+998-90-060-57-47" className="text-decoration-none text-white">+998 90 060 57 47</a>
      </div>
    </div>
    <div className="d-flex align-items-center gap-4">
      <p className="mb-0 fs-5 text-white-50 ">Stay connected</p>
      <a className="fs-4 text-decoration-none text-white"><i className="icon-telegram"></i></a>
      <a className="fs-4 text-decoration-none text-white"><i className="icon-facebook"></i></a>
      <a className="fs-4 text-decoration-none text-white"><i className="icon-instagram"></i></a>
    </div>
    </div>
    <div className="contact__right">
        <h2 className="mb-4">Курсга ёзилиш </h2>
        <form>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="name" className="text-white-50 mb-2 fs-5">Ism Familiya</label>
            <input id="name" className="contact__input" type='text' required autoComplete="off"/>
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="name" className="text-white-50 mb-2 fs-5">Telefon nomer</label>
            <input id="name" className="contact__input" type='tel' defaultValue="+998" required autoComplete="off"/>
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="name" className="text-white-50 mb-2 fs-5">Yoshingiz</label>
            <input value={ageInput} onChange={handleAgeInput} id="name" className="contact__input" type='text' required autoComplete="off"/>
          </div>
          <Button color='AbyssalAnchorfishBlue' border={true}>Курсга ёзилиш</Button>
        </form>
    </div>
  </section>;
};

export default Contact;
