// import './App.css';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Collaboration() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <h1>Our Collaboration</h1>
      <Slider {...settings}>
        {data.map((d) =>(
            <div className="">
              <div className='collaboration-one'>
                <img src={d.img} alt="Error" className="collaboration"/>
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
    img : './collaboration/chiral.webp',
  },
  {
    img : './collaboration/eluru.webp',
  },
  {
    img : './collaboration/gec.webp',
  },
  // {
  //   img : './collaboration/geetanjali.webp',
  // },
  
  {
    img : './collaboration/logo-1.webp',
  },
  {
    img : './collaboration/logo-2.webp',
  },
  {
    img : './collaboration/logo-3.webp',
  },
  {
    img : './collaboration/logo-4.webp',
  },
  {
    img : './collaboration/logo-5.webp',
  },
  {
    img : './collaboration/loyola.webp',
  },
 
  {
    img : './collaboration/mlwec.webp',
  },
  
  {
    img : './collaboration/nec.webp',
  },
  // {
  //   img : './collaboration/narasaraopeta.webp',
  // },
  
  {
    img : './collaboration/nri.webp',
  },
  {
    img : './collaboration/sdmk.webp',
  },
  {
    img : './collaboration/secv.webp',
  },
  {
    img : './collaboration/vijayawada.webp',
  },
  {
    img : './collaboration/ssvs.webp',
  },
  {
    img : './collaboration/chaitanya.webp',
  },
  {
    img : './collaboration/mlrit.webp',
  },
  {
    img : './collaboration/nalanda.webp',
  },
  {
    img : './collaboration/vrsec.webp',
  },
  {
    img : './collaboration/kits.webp',
  }
  
]
export default Collaboration;