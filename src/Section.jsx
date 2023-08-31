import React, {useEffect} from "react";
import Aos from 'aos'
import "aos/dist/aos.css"


const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
 }, []);
    return ( 
      <>
    <div className="intro">
      <div className="container"  data-aos="fade-up">
        <h1>Hello am Ladipo <span>matthew</span></h1>
        <h3 className="text">
          A software developer with proficient skill in web development and
          a expert of front-end development. I look forward to sertisfy all your
          available request .
        </h3>

        <a href="#about" className="btn hero-btn">
          <i className="fas fa-chevron-down"></i>explore
        </a>
      </div>
    </div>

   
    </>
     );
    
}
 
export default Section;