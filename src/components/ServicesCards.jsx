import '../styles/components/ServicesCards.sass';
import { BsArrowRightSquare } from 'react-icons/bs';

import { dataServices } from '../data/services';

const ServicesCards = () => {
  return (

    <>
      <div className='header'>
        <h4>Principais serviços</h4>
      </div>
      <div className="content">

        {dataServices.map( (service) => {

          return (
            <div className="serviceCard" key={service.id}>
              <div className="cardInfo">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
              <div className="menuMore">
                <button className="btnMore">
                  <a href='http://suporte.up-ti.com'>Saiba mais</a>
                  <BsArrowRightSquare/>
                </button>
              </div>
            </div>
            );
          })}

      </div>

    </>
  );
};

export default ServicesCards;