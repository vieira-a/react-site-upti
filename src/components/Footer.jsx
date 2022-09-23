//import { IoLogoLinkedin, IoLogoInstagram, IoLogoDiscord } from "react-icons/io5";
import '../styles/components/Footer.sass'

const Footer = () => {
  return (
    <>
    
      <footer>
        {/* <div className="socialLinks">
          <a href="https://www.linkedin.com"><IoLogoLinkedin/></a>
          <a href="https://www.instagram.com"><IoLogoInstagram/></a>
          <a href="https://www.discord.com"><IoLogoDiscord/></a>
        </div> */}
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
  )
}

export default Footer