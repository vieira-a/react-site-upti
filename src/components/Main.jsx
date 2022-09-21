import AnalyticsCards from "./AnalyticsCards"
import MainHeader from "./MainHeader"

const Main = () => {

  return (
    <main>
      
      <div className="hero">
        
        <MainHeader/>

      </div>

      <div className="analytics">

        <AnalyticsCards/>
      
      </div>


    </main>
  )
}

export default Main