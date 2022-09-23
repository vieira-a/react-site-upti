import '../styles/components/AnalyticsCards.sass'
import { BsArrowRightSquare } from "react-icons/bs";

import { dataAnalytics } from '../data/stats'

const AnalyticsCards = () => {
  
  return (

    <>

      <div className="header">
        
        <h4>Indicadores</h4>

      </div>

      <div className="content">

        {dataAnalytics.map( (data) => {
          
          return (
            
            <div className='analyticCard' key={data.id}>

              <div className="cardInfo">
                
                <h2>{data.avg}</h2>
                <p>{data.description}</p>

              </div>

              <div className="menuMore">
                <button className="btnMore">
                  <a href='http://suporte.up-ti.com'>Saiba mais</a>
                  <BsArrowRightSquare/>
                </button>
              </div>

            </div>
          )

        })}

      </div>

      </>  
  );
};

export default AnalyticsCards