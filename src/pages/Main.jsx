import AnalyticsCards from '../components/AnalyticsCards';
import MainHeader from '../components/MainHeader';
import ServicesCards from '../components/ServicesCards';
import ContactCards from '../components/ContactCards';
import Footer from '../components/Footer';

const Main = () => {

  return (

    <main>  
      <div className="hero">
        <MainHeader/>
      </div>
      <div className="analytics">
        <AnalyticsCards/>
      </div>
      <div className='services' id='services'>
        <ServicesCards />
      </div>
      <div className="contact">
        <ContactCards />
      </div>
        <Footer />
    </main>
  );
};

export default Main;