import AnalyticsCards from '../components/AnalyticsCards';
import MainHeader from '../components/MainHeader';
import ServicesCards from '../components/ServicesCards';
import ContactCards from '../components/ContactCards';
import Footer from '../components/Footer';

const Main = () => {

  return (

    <main>  
      <div className="section hero" id='home'>
        <MainHeader/>
      </div>
      <div className="section analytics" id='analytics'>
        <AnalyticsCards/>
      </div>
      <div className='section services' id='services'>
        <ServicesCards />
      </div>
      <div className="section contact" id='contact'>
        <ContactCards />
      </div>
        <Footer />
    </main>
  );
};

export default Main;