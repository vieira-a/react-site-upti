import React from 'react'
import MainHeaderBanner from '../assets/banner-services.jpg'

const MainHeader = () => {
  return (
    <section>
      <div className="bannerImage">
        <img src={MainHeaderBanner} alt="" />

      </div>
         <div className="content">
          <h2>Boas vindas á UP!</h2>
          <p>Usamos a tecnologia de forma inteligente em busca do crescimento para o seu negócio.</p>
        </div>
    </section>
  )
}

export default MainHeader