import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Companies from '../Companies';
import Collaboration from '../Collabarations';


function Pre() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-3/4 m-auto" style={{ backgroundColor: "#f5f1eb" }}>
      <div className="mt-20">
        <div className='stu_cards'>
        <h1>Student Testimonials</h1>
      <Slider {...settings}>
        {data.map((d) =>(
            <div className="three">
              {/* <div className='four'> */}
                <img src={d.img} alt="Error" className="image"/>
              {/* </div> */}
              <div className="section">
                <p>{d.review}</p>
                <p className="one">{d.name}</p>
                <p >{d.title}</p>
                {/* <button className="two">Read More</button> */}
              </div>
            </div>
            
        ))}
       
      </Slider>
        </div>
    
      </div><br></br><br></br><br></br>
      <Companies/>
    
    </div>
  );
}

const data = [
  {
   
    img : './images/star-icon.jpg',
    review :'Those people who want to learn for data science and artificial intelligence, it is right place. For me it helps a lot. Faculty is very good and cooperative.',
    name :'Soumya verma',
    title :'Student, PB siddhartha Arts and science college'
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

export default Pre;