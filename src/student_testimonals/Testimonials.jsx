import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Companies from '../Companies';
import Collaboration from '../Collabarations';
import './testimonials.css';

// function Testimonials() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="test-container" style={{backgroundColor:"#0F1D42"}} >
//       <div className="mt-20">
//         <div className='stu_cards'>
//         <h1>Student Testimonials</h1>
//       <Slider {...settings}>
//         {data.map((d) =>(
//             <div className="three">
//                 <center>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 </center>
//               <div className="section">
//                 <p>{d.review}</p>
//                 <p className="one">{d.name}</p>
//                 <p >{d.title}</p>
//               </div>
//             </div>
            
//         ))}
       
//       </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

const data = [
  {
   
    img : './images/star-icon.jpg',
    review :'I am truly thankful to Codegnan IT Solutions for granting me the chance to intern with their wonderful organization. This experience has been a fantastic journey of growth and learning for me as a student, and it would not have been possible without their valuable guidance and mentorship. I am a ML student here, the course curriculum is well made with theoretical and practical knowledge. Great staff who guide you with all possibilities by clarifying your doubts.',
    name :'Poojitha Reddy',
    // title :'Student, PB siddhartha Arts and science college'
  },
  {
    img : '/images/star-icon.jpg',
    review :'I got to know codegnan through online. I attended python course. The team helped me to overcome the problems I face while programming in python language. I learned much here so that i am pretty good with my core python.',
    name :'Udanya Korupolu',
    title : 'Student, KL University'
  },
  {
    
    img : './images/star-icon.jpg',
    review :'Flexible Timings, friendly environment and good staff!! good initiative for programmme beginners in various computer languages, overall I love this experience.',
    name :'Srikanth Marni',
    title:'Student, Savitha Engineering College'
  },
  {
  
    img : '/images/star-icon.jpg',
    review :'Go to know about Codegnan through google and joined in it after going through their reviews.it been a very encouraging and positive experience right from getting details, joining and completing my Microsoft certification exam. The staff here is very helpful in every possible way especially sairam sir has been good in helping through out the course. I highly recommend Codegnan.',
    name :'Sasanc Reddy',
    title :'Employee, Mc Afee'
  },
  {

    img : '/images/star-icon.jpg',
    review :'Those people who want to learn for data science and artificial intelligence, it is right place. For me it helps a lot. Faculty is very good and cooperative.',
    name :'Soumya verma',
    title:'Student, PB siddhartha Arts and science college'
  },
  {
    
    img : '/images/star-icon.jpg',
    review :'I got to know codegnan through online. I attended python course. The team helped me to overcome the problems I face while programming in python language. I learned much here so that i am pretty good with my core python.',
    name :'Udanya Korupolu',
    title : 'Student, KL University'
  }
]




function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots'
  };

  return (
    <div className="test-container" style={{ backgroundColor: "#0F1D42" }}>
      <div className="mt-20">
        <div className="stu_cards">
          <div className="slider-wrapper"> {/* Wrap Slider with this div */}
            <Slider {...settings}>
              {data.map((d, index) => (
                <div className="three" key={index}> {/* Added key attribute */}
                  <center>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                  </center>
                  <div className="section">
                    <center>
                    <p className="review">{d.review} <br /></p>
            
                    </center>
                    <br /><br />
                    <i className="fa-solid fa-quote-right two" style={{float: "right", marginRight: "5px"}}> </i><br />
                    <span className="one"><h4 >{d.name}</h4></span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
 export default Testimonials;