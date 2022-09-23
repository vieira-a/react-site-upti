import AnalyticsCards from "./AnalyticsCards"
import MainHeader from "./MainHeader"
import ServicesCards from "./ServicesCards"
import ContactCards from "./ContactCards"

const Main = () => {

  return (
    <main>
      
      <div className="hero">
        
        <MainHeader/>

      </div>

      <div className="analytics">

        <AnalyticsCards/>
      
      </div>

      <div className="services">

        <ServicesCards />

      </div>

      <div className="contact">

        <ContactCards />

      </div>


    </main>
  )
}

export default Main