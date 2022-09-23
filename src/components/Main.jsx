import AnalyticsCards from './AnalyticsCards';
import MainHeader from './MainHeader';
import ServicesCards from './ServicesCards';
import ContactCards from './ContactCards';
import Footer from './Footer';

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
        <Footer />
    </main>
  );
};

export default Main;