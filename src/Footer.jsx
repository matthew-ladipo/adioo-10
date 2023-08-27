const Footer = () => {
    return ( 
        <footer className="copyright">
        <div href="#" className="back-to-top">
          <a href="#"
            ><i className="fas fa-chevron-up"></i
          ></a>
        </div>
        <p>&copy; 2020 matthewladipo</p>
        <div className="social-media">
          <ul>
            <li>
              <a href="#" target="_blank" className="icon-link">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
     );
}
 
export default Footer;