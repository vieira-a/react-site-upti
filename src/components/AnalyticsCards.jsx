import React from 'react'
import '../styles/components/AnalyticsCards.sass'
import { BsArrowRightSquare } from "react-icons/bs";

import { dataAnalytics } from '../data/stats.js'

const AnalyticsCards = () => {
  
  return (

    <>

      <div className="header">
        
        <h2>Indicadores em destaque</h2>

      </div>

      <div className="content">

        {dataAnalytics.map( (data) => {
          
          return (
            
            <div className='analyticCard' key={data.id}>

              <h1>{data.avg}</h1>
              <h3>{data.description}</h3>
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