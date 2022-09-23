import '../styles/components/Footer.sass';

const Footer = () => {

  return (
    <>
    
      <footer>
        <div className="logo">
          <a href="index.html">
            <img src="logo.png" alt="Logo UPTI" />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2022</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>

    </>
  );
};

export default Footer;