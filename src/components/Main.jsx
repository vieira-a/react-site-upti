import AnalyticsCards from "./AnalyticsCards"
import MainHeader from "./MainHeader"
import ServicesCards from "./ServicesCards"

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


    </main>
  )
}

export default Main