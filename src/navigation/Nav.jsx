import './Nav.css';
import logo from '../assets/Logo.png';
import {Link } from "react-router-dom";

export default function Nav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  };
  return (
    <div  className="Navbar">
      <Link to="/"> 
      <img id="logo" src={logo} onClick={scrollToTop} alt="Logo" />
      </Link>
      
      <span className='Home'>

        
        <div className="dropdown">
          <button className="dropbtn">Trainings <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#" className="option">Python Trainings <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/python_training_in_banglore" onClick={scrollToTop}><li>In Banglore </li></Link>
                <Link to="/python_training_in_hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/python_training_in_Vijayawada" onClick={scrollToTop} ><li>In Vijayawada</li></Link>
                
              </ul>
            </div>
            <a href="#" className="option">Python full stack <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
              <Link to="/python-full-stack-developer-in-banglore" onClick={scrollToTop}><li>In Banglore</li></Link>
              <Link to="/python-full-stack-developer-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/python-full-stack-developer-in-vijayawada" onClick={scrollToTop}> <li>In Vijayawada</li></Link>
             
              </ul>
            </div>
            <a href="#" className="option">Java Training  <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <li>In Banglore </li>
                <li>In Hyderabad</li>
                <li>In Vijayawada</li>
              </ul>
            </div>
            <a href="#" className="option">Java full stack training <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <li>In Banglore </li>
                <li>In Hyderabad</li>
                <li>In Vijayawada</li>
              </ul>
            </div>
            <a href="#" className="option"> Data science training  <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <li>In Hyderabad</li>
                <li>In Vijayawada</li>
              </ul>
            </div>
            <a href="#" className="option">  Machine learning  <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <li>In Hyderabad</li>
                <li>In Vijayawada</li>
              </ul>
            </div>
            <a href="#" className="option"> React JS training in Vijayawada </a>
            <div className="side-listings">
              <ul>

              </ul>
            </div>
            <a href="#" className="option">Data structures training in Vijayawada</a>
            <div className="side-listings">
              <ul>

              </ul>
            </div>
            <a href="#" className="option">C programming in Vijayawada</a>
            <div className="side-listings">
              <ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Resourses <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#" className="option">Guides </a>
            <div className="side-listings">
              <ul>
              </ul>
            </div>
            <a href="#" className="option">Syllabus <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <a href="./java_course_page"><li>Java Syllabus</li></a>
                <a href="./ds_course_page"><li>Data structures</li></a>
                <li>Python syllabus</li>
                <li>React JS syllabus</li>
                <li>C language syllabus</li>
                <li>Data science syllabus</li>
                <li>Java full stack syllabus</li>
              </ul>
            </div>
          </div>
        </div>

        <Link className="dropbtn" to="/placements" onClick={scrollToTop}>Placements</Link>

        <div className="dropdown">
          <button className="dropbtn">About <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <Link to="/about" className="option" onClick={scrollToTop}>Team </Link>
            <Link to="/gallery" className="option" onClick={scrollToTop}>Gallery</Link>
            <a href="#" className="option">Internships</a>
            <a href="#" className="option">Job Accelerator Program</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Campuses <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#" className="option">Vijayawada </a>
            <a href="#" className="option">Hyderabad</a>
            <a href="#" className="option">Banglore</a>
          </div>
        </div>


        <button className="dropbtn">Contact</button>

      </span>

    </div>


  );
}




