import './home.css';
import '../helper.js';
import React, { useState } from 'react';
import Rated from './Rated';
import banner from './banner.webp';
import rate1 from './rate_1.webp';
import rate3 from './rate3.webp';
import rate4 from './rate4.webp';
import rate5 from './rate5.webp';
import rate6 from './rate6.webp';
import rate7 from './rate7.webp';
import bg from '/i.png';
import Course_details from './Course_details';

import c1 from '/images/adabella1.webp';
import c2 from '/images/amazon.webp';
import c3 from '/images/bankof-america.webp';
import c4 from '/images/bosch.webp';
import c5 from '/images/capgeminin.webp';
import c6 from '/images/deloitte.webp';
import c7 from '/images/ezetap.webp';
import c8 from '/images/gensuite.webp';
import c9 from '/images/google.webp';
import c10 from '/images/hcl.webp';
import c11 from '/images/hired.webp';
import c12 from '/images/iit-bombay.webp';
import c13 from '/images/microsoft.webp';
import c14 from '/images/mphasis.webp';
import c15 from '/images/Nielseni-iq.webp';
import c16 from '/images/pwc.webp';
import c17 from '/images/slb.webp';
import c18 from '/images/stanford-university.webp';
import c19 from '/images/star-icon.jpg';
import c20 from '/images/tcs.webp';
import c21 from '/images/tech-mahindra.webp';
import c22 from '/images/teksan-logo.webp';
import c23 from '/images/temenos-logo-1.webp';
import c24 from '/images/truminds-logo-1.webp';
import c25 from '/images/voya-india-logo-1.webp'
import Testimonials from '../student_testimonals/Testimonials.jsx';
import ceo from '/members/sairam-sir.webp';
import saketh from '/members/trainer-2.pngw3_.webp';
import Collaboration from '../Collabarations.jsx';

export default function Home() {
    function showText(event) {
        // event.target.children[].toggle("hidden");
        event.stopPropagation(); // Stop event propagation

        const para = event.currentTarget.nextElementSibling;
        const buttonSymbol = event.currentTarget.querySelector('.buttonclick');

        para.classList.toggle('hidden');
        buttonSymbol.innerHTML = para.classList.contains('hidden') ? '&#9660;' : '&#10006;';

        // Change color of h4 heading
        event.currentTarget.classList.toggle('heading-clicked');
    }


    return (

        <div>
            <div className="home">
                <div className='banner_div'>
                    <h1>Online & classroom <br /> <span className='change_color'>IT training institute (India)</span> </h1>
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
                <div className='certification_program' style={{ backgroundImage: `url(${bg})` }}>
                    <center>
                        <h1><i className="fa-solid fa-star custom-icon"></i>Our Certification <span className='change_color'>programs</span></h1>
                    </center>
                    <div className='course_details_container'>
                        <Course_details
                            duration="1 Month"
                            courseTitle="Python"
                            course="training"
                            locations={['Hyderabad  ,', 'Vijayawada  ', 'Bangalore']}
                            paragraph={<p>Launch your data science or web development career with Python, the versatile programming language.</p>} />
                        <Course_details
                            duration="6 Months"
                            courseTitle="Data science"
                            course="training"
                            locations={['Hyderabad  ,', 'Vijayawada  ']}
                            paragraph={<p>Advance your analytics career by gaining data science skills to extract strategic insights.</p>} />
                        <Course_details
                            duration="100 Days"
                            courseTitle="Full-stack Pyhton"
                            course="course"
                            locations={['Hyderabad  ,', 'Vijayawada  ', 'Bangalore']}
                            paragraph={<p>Become a full-stack Python developer and kickstart your web and app development career.</p>} />

                        <Course_details
                            duration="1 Month"
                            courseTitle="Java"
                            course="training"
                            locations={['Hyderabad  ,', 'Vijayawada  ', 'Bangalore']}
                            paragraph={<p>Strengthen your backend development career by mastering object-oriented Java.</p>} />
                        <Course_details
                            duration="6 Months"
                            courseTitle="Machine Learning"
                            course="training"
                            locations={['Hyderabad  ,', 'Vijayawada  ']}
                            paragraph={<p>Advance your career in AI by mastering machine learning models and algorithms.</p>} />
                        <Course_details
                            duration="100 Days"
                            courseTitle="Full-stack Java"
                            course="course"
                            locations={['Hyderabad  ,', 'Vijayawada  ', 'Bangalore']}
                            paragraph={<p>Launch your career as a full-stack developer by gaining in-demand Java skills spanning front and backend.</p>} />

                        <Course_details
                            duration="1 Month"
                            courseTitle="JS"
                            course="training"
                            locations={['Vijayawada  ']}
                            paragraph={<p>Boost your front-end career by building interactive web apps with React.</p>} />
                        <Course_details
                            duration="3 Months"
                            courseTitle="Data structures & algoritm"
                            course="training"
                            locations={['Vijayawada  ']}
                            paragraph={<p>Strengthen your foundations to pass interviews and excel in software roles.</p>} />
                        <Course_details
                            duration="30 Days"
                            seTitle="C Programming"
                            course="course"
                            locations={['Vijayawada  ', 'Bangalore']}
                            paragraph={<p>Advance your systems and hardware programming career by mastering C language.</p>} />
                    </div>
                </div>
                <div className='company_tie_up'>
                    <div className='company_tie_up_in'>
                        <center>
                            <h2>Companies where <span className='change_color'> Our students got placed</span></h2>
                        </center>

                        <section className='logo_section'>
                            <div className='company_logo_container'>

                                <img src={c1} alt="" />
                                <img src={c2} alt="" />
                                <img src={c3} alt="" />
                                <img src={c4} alt="" />
                                <img src={c5} alt="" />
                                <img src={c6} alt="" />
                                <img src={c7} alt="" />
                                <img src={c8} alt="" />
                                <img src={c9} alt="" />
                                <img src={c10} alt="" />
                                <img src={c11} alt="" />
                                <img src={c12} alt="" />
                                <img src={c13} alt="" />
                                <img src={c14} alt="" />
                                <img src={c15} alt="" />
                                <img src={c16} alt="" />
                                <img src={c17} alt="" />
                                <img src={c18} alt="" />
                                <img src={c19} alt="" />
                                <img src={c20} alt="" />
                                <img src={c21} alt="" />
                                <img src={c22} alt="" />
                                <img src={c23} alt="" />
                                <img src={c24} alt="" />
                                <img src={c25} alt="" />
                            </div>
                        </section>

                    </div>
                    <div className='Why_to_enroll'>
                        <div className='why_to_enroll_heading'><h2> Why enroll in Codegnan's <br /><span className='change_color'>Certification programs</span> </h2></div>
                        <div className='why_to_entroll_details'>
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Job Assistance Program
                                </h3>
                                <p id="para_buttonclick" className="hidden">Enroll in our 100-day <a href=""> Job Accelerator Program</a>, offering ajob placement and career support for a successful transition into the workforce.</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Affordable Training Fees
                                </h3>
                                <p id="para_buttonclick" className="hidden">Start your learning journey with affordable training fees, beginning at just 5000 INR for the foundational course.</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Expert Trainers and Mentors
                                </h3>
                                <p id="para_buttonclick" className="hidden">Get mentored by industry experts, including professionals from IITs, Amazon, Google, ensuring top-notch education and real-world insights. Meet our <a href="">team of trainers and mentors</a>.</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Online or Classroom Training
                                </h3>
                                <p id="para_buttonclick" className="hidden">Choose your preferred learning mode – online live classes or attend classroom training in Hyderabad, Vijayawada, and Bangalore. <a href="">Contact us now</a>  to share your queries</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Trusted by 30,000+ Students
                                </h3>
                                <p id="para_buttonclick" className="hidden">Join a community of over 30,000 satisfied students who have rated our courses at 4.8/5, trusting Codegnan for quality education.</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Practical Learning with Projects
                                </h3>
                                <p id="para_buttonclick" className="hidden">Gain hands-on experience with live projects integrated into every certification program, ensuring practical application of your newly acquired skills.</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Industry recognized certification
                                </h3>
                                <p id="para_buttonclick" className="hidden">Successfully pass the exam to attain a recognized certification and further showcase your skills through participation in HackerRank certifications.</p>
                            </div>
                            <hr />
                            <div className='why_to_enroll_listings'>
                                <h3 onClick={showText}>
                                    <span id="buttonSymbol" className="buttonclick">&#9660;</span> Updated and Comprehensive Course Curriculum
                                </h3>
                                <p id="para_buttonclick" className="hidden">Stay ahead with our updated and comprehensive course curriculum, ensuring you learn the latest industry-relevant skills for a successful career.</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className='testimonials'>
                        <center>
                            <h1 className='change_color'>Our Testimonials</h1><br />
                            <h1>What Our Students have to Say</h1>
                        </center>
                        <Testimonials />
                    </div>
                    <div className='top-notch-team'>
                        <div>
                            <strong style={{ color: "#808080", fontWeight: 'bold' }}>OUR TEAM</strong>
                            <br /><br />
                            <span>
                                <h3 className='notch-team-heading'>Our Top Notch Teams <br />Involved In Helping <span style={{ color: "#cc3366" }}>You Learn Programming</span>, <br />Not Just Coding.</h3>
                            </span>
                            <div className='div_container_notch_team'>
                                <div className='div_container_notch_team_section1'>
                                    <ul>
                                        <li> <span className='check'>&#x2713;</span>Embark on a Journey with Elite Mentors - IIT Alumni and Top MNC Experts.</li>
                                        <li><span className='check'>&#x2713;</span>Experience Doubt-Free Learning from Product Developers.</li>
                                        <li><span className='check'>&#x2713;</span>Elevate Your Skills with Expert Masterclasses.</li>
                                    </ul>
                                </div>
                                <div className='div_container_notch_team_section2'>
                                    <div>
                                        <img src={ceo} alt="ceo" />
                                        <center><h4>Mr.SaiRam</h4></center>
                                    </div>
                                    <div>
                                        <img src={saketh} alt="saketh" />
                                        <center><h4>Mr.Saketh</h4></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Our_training_center'>
                        <center> <h2>Our Training <span className='change_color'>Campuses</span></h2></center>
                        <div className='div_container_training_center'>
                            <div className='center_details'>
                                <div>
                                    <i className="fa-solid fa-phone phone" ></i>
                                    call: <a href="">+91 9888748888</a>
                                </div>
                                <h3>Vijayawada training <span className='change_color'>centre</span></h3>
                                <p>40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010.</p>
                                <p>Visit our <a href="" className='campus_link'>Vijayawada Campus</a></p>
                            </div>
                            <div className='center_details'>
                                <div>
                                    <i className="fa-solid fa-phone phone" ></i>
                                    call: <a href="">+91 9888758888</a>
                                </div>
                                <h3>Hyderabad training <span className='change_color'>centre</span></h3>
                                <p>Kothwal Madhava Reddy Plaza, Near JNTUH Metro Station, Nizampet X Roads, Hyderabad, 500072.</p>
                                <p>Visit our <a href="" className='campus_link'>Hyderabad Campus</a></p>
                            </div>
                            <div className='center_details'>
                                <div>
                                    <i className="fa-solid fa-phone phone" ></i>
                                    call: <a href="">+91 9888738888</a>
                                </div>
                                <h3>Banglore training <span className='change_color'>centre</span></h3>
                                <p>#951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka, 560076.</p><br />
                                <p>Visit our <a href="" className='campus_link'>Banglore Campus</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='our_collaborations'>
                        <center>
                            <h1 className='change_color'>Our Collaborations</h1>
                            <br /><br />
                            <Collaboration />
                        </center>
                    </div>
                    <center>
                        <div className='still_douts'>

                            <h1>Still have questions regarding courses?</h1><br />
                            <p>Talk to our team and get support in identifying the right tech career course for you. Our team will answer your questions regarding courses, fees, batch details, and all.</p>
                            <br />
                            <button> <i className="fa-solid fa-phone phone" ></i> Call us</button>

                        </div>
                    </center>

                </div>
            </div>
        </div>
    );
}