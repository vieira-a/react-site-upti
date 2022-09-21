import React from 'react'
import MainHeaderBanner from '../assets/banner-services.jpg'

const MainHeader = () => {
  return (
    <>

      <div className="banner">
        
        <img src={MainHeaderBanner} alt="" />

      </div>

      <div className="header">

          <h2>Boas vindas à UP!</h2>
          <p>Usamos a <b>tecnologia</b> de forma <b>inteligente</b> em busca do <b>crescimento</b> para o seu negócio.</p>

      </div>

    </>
  )
}

export default MainHeader