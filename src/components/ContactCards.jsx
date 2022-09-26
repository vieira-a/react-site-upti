import { IoLogoWhatsapp, IoMailOutline, IoHelpCircleOutline } from "react-icons/io5";

import '../styles/components/ContactCards.sass';

import { dataContact } from '../data/contacts';

const ContactCards = () => {
  return (
    <>
      <div className="header">
        <h4>Fale conosco</h4>
      </div>

      <div className="content">

        {dataContact.map(( contact ) => {
          
          return (

            <div className="contactCard" key={contact.id}>
              <h4>
                <a className="card" href={contact.support}><IoHelpCircleOutline />Abrir chamado</a>
              </h4>
              <h4>
                <a className="card" href={contact.phone}><IoLogoWhatsapp/>Telefone</a>
              </h4>
              <h4>
                <a className="card" href={contact.email}><IoMailOutline/>E-mail</a>
              </h4>
            </div>   

          );
        })}

      </div>
    </>
  );
};

export default ContactCards;