// import './App.css';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

function Companies() {

  const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 5,
     slidesToScroll: 2
  };

   return (
     <div className="w-3/4 m-auto">
       <div className="mt-20">
         <h1>1250+ Companies Have Hired Codegnan Learners</h1>
       <Slider {...settings}>
        {data.map((d) =>(
             <div className="">
               <div className='five'>
           <img src={d.img} alt="Error"/>
             </div>
             
             </div>
        ))}
       </Slider>
       </div>
      
     </div>
   );
 }



const data = [
  {
    img : './images/ezetap.webp',
  },
  {
    img : '/images/adabella1.webp',
  },
  {
    img : './images/amazon.webp',
  },
  {
    img : '/images/bankof-america.webp',
  },
  {
    img : '/images/bosch.webp',
  },
  {
    img : '/images/capgeminin.webp',
  },
  {
    img : '/images/deloitte.webp',
  },
  {
    img : '/images/gensuite.webp',
  },
  {
    img : '/images/google.webp',
  },
  {
    img : '/images/hcl.webp',
  },
  {
    img : '/images/hired.webp',
  },
  {
    img : '/images/slb.webp',
  },
  {
    img : '/images/iit-bombay.webp',
  },
  {
    img : '/images/microsoft.webp',
  },
  {
    img : '/images/mphasis.webp',
  },
  {
    img : '/images/Nielseni-iq.webp',
  },
  {
    img : '/images/pwc.webp',
  },
  {
    img : '/images/tcs.webp',
  },
  {
    img : '/images/stanford-university.webp',
  },
  {
    img : '/images/tech-mahindra.webp',
  },
  {
   
    img : '/images/teksan-logo.webp',
  },
  {
   
    img : '/images/temenos-logo-1.webp',
  },
  {
    img : '/images/truminds-logo-1.webp',
  },
  {
   
    img : '/images/voya-india-logo-1.webp',
  },
]
export default Companies;



