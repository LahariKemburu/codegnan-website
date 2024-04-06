import './home.css'
import Rated from './Rated';
import banner from './banner.webp';
import rate1 from './rate_1.webp';
import rate3 from './rate3.webp';
import rate4 from './rate4.webp';
import rate5 from './rate5.webp';
import rate6 from './rate6.webp';
import rate7 from './rate7.webp';
export default function Home() {
    return (
        <div>
             <div className="home">
            <div className='banner_div'>
                <h1>Online & classroom <br /> <span>IT training institute (India)</span> </h1>
                <br />
                <p>Codegnan offers finishing schools for students who wants to start and grow their tech career. Become job-ready with our expert trainer led online and classroom IT certification courses.</p>
                <br />
                <ul>
                    <li> <span className='check'>&#x2713;</span>Expert trainers from top universities and companies</li>
                    <li><span className='check'>&#x2713;</span>Trained 30,000+ students</li>
                    <li><span className='check'>&#x2713;</span>1250+ companies have hired Codegnan learners</li>
                    <li><span className='check'>&#x2713;</span>Most advanced course curriculum</li>
                    <li><span className='check'>&#x2713;</span>Practical learning with live projects</li>
                    <li><span className='check'>&#x2713;</span>Career support with our job acceleration program</li>
                    <li><span className='check'>&#x2713;</span>Rated 4.8/5 by more than 2,200 students</li>
                </ul>
                <br />
                <a href="your_destination_url" className="explore-button">
                    Explore Program <i className="fas fa-arrow-right"></i>
                </a>

            </div>
            <span>
                <img src={banner} alt=""></img>
            </span>
        </div>
        <div className='rating_container'>
            <div className='rated_div'>
            <Rated 
                imageSrc={rate1} 
                spanText="Google My Business" 
                paragraphText="Rated 4.8/5" 
            />
             <Rated 
                imageSrc={rate1} 
                spanText="Trustpilot &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
                paragraphText="Rated 4.8/5" 
            />
             <Rated 
                imageSrc={rate3} 
                spanText="Justdial &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
                paragraphText="Rated 4.7/5" 
            />
            </div>
            <br /><br /><br />
            <div className='rated_div'>
            <Rated 
                imageSrc={rate4} 
                spanText="Students placed till&nbsp;&nbsp;" 
                paragraphText="date" 
            />
             <Rated 
                imageSrc={rate5} 
                spanText="Drives conducted so" 
                paragraphText="for" 
            />
             <Rated 
                imageSrc={rate6} 
                spanText="Highest salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
                paragraphText="package" 
            />
             <Rated 
                imageSrc={rate7} 
                spanText="Average salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
                paragraphText="package" 
            />
             
            </div>
            </div>
            &#9733;
        </div>
       
    );
}