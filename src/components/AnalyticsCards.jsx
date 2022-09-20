import React from 'react'
import '../styles/components/AnalyticsCards.sass'

const AnalyticsCards = () => {

  const dataAnalytics = [
    {
      id: 1,
      avg: 50,
      description: "Projetos realizados"
    },
    {
      id: 2,
      avg: 200,
      description: "Atendimentos mensais"
    },
    {
      id: 3,
      avg: 80,
      description: "Pessoas atendidas"
    }
  ]
  
  return (
  
    <div className="content">

      <div className="analytics">

      {dataAnalytics.map( (data) => {
        
        return (
          
          <div className='analyticCard' key={data.id}>

            <h2>+ {data.avg}</h2>
            <p>{data.description}</p>

          </div>
        )
    
      

      })}
      
      </div>

    </div>

  );
};

export default AnalyticsCards