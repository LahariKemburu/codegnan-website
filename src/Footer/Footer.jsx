import "./Footer.css"
import logo from '../assets/Logo2.png';

export default function Footer() {
    return (
        <div className="Footer">


            <section className="elementor_selection">
                <div className="center">
                    <div className="left">
                        <img id="logo2" src={logo} alt="Logo" />
                        <p id="main_p">With ver two decades, we are bringing international teaching standards to the tech aspirants globally. Nurture your inner coder with us
                            and take a charge of your coding carrer with the top trending and high paying technologies.THis is the right time to enloghten your code "GNAN".
                        </p>
                        <div className="branch_details">
                            <strong id="strong">OUR BRANCHES</strong>
                            <br /><br />
                            <a href="">Vijayawada</a>
                            <br /><br />
                            <p>40-5-19/16,Prasad Naidu Complex , P.B.Siddhartha Busstop , Moghalrajpuram , Vijayawada , Andhra Pradesh , 520010.</p>
                            <br />
                            <a href="">Hyderabad</a>
                            <br /><br />
                            <p>Kothwal Madhava Reddy Plaza , Beside Indian Oil Petrol Bunk , JNTUH Metro Station , Nizampet X Roads, Hyderabad , 500072</p>
                            <br />
                            <a href="">Bengaluru</a>
                            <br /><br />
                            <p>#951 ,16th Main , BTM 2nd Stage , Benguluru , Karnataka , 560076</p>
                        </div>
                    </div>
                    <div className="populated">
                        <strong id="strong">COMPANY</strong><br /><br />
                        <span>Blogs</span>
                        <span>About us</span>
                        <span>Internships</span>
                        <span>Placements</span>
                        <span>Become a mentor</span>
                        <span>Job acceleration program</span>

                        <i className="fa-brands fa-linkedin-in social-icon"></i>
                        <i className="fa-brands fa-youtube social-icon"></i>
                        <i className="fa-brands fa-facebook social-icon"></i>
                        <i className="fa-brands fa-twitter social-icon"></i>
                        <i className="fa-brands fa-instagram social-icon"></i>
                        <i className="fa-brands fa-whatsapp social-icon"></i>
                        <i className="fa-brands fa-telegram social-icon"></i>


                    </div>
                </div>
            </section>
            <br /><br />
            <section className="our_courses">
                <div className="courses">
                    <h3>Our courses in Vijayawada</h3><br />
                    <a href="">Python Training in Vijayawada</a><br />
                    <a href="">Python full-stack course Vijayawada</a><br />
                    <a href="">Data science training in Vijayawada</a><br />
                    <a href="">Machine learning in Vijayawada</a><br />
                    <a href="">React JS training in Vijayawada</a><br />
                    <a href="">Data structures course in Vijayawada</a><br />
                    <a href="">C programming course in Vijayawada</a>
                </div>
                <div className="courses">
                    <h3>Our courses in Hyderabad </h3><br />
                    <a href="">Python training in Hyderabad</a><br />
                    <a href="">Python full-stack training in Hyderabad</a><br />
                    <a href="">Core Java training in Hyderabad</a><br />
                    <a href="">Java full-stack course in Hyderabad</a><br />
                    <a href="">Data science training in Hyderabad</a><br />
                    <a href="">Machine learning course in Hyderabad</a><br />
                </div>
                <div className="courses">
                    <h3>Our courses in Banglore </h3><br />
                    <a href="">Python training in Banglore</a><br />
                    <a href="">Python full-stack training in Banglore</a><br />
                    <a href="">Core Java training in Banglore</a><br />
                    <a href="">Java full-stack course in Banglore</a><br />
                </div>
            </section><br /><br />
            <div className="footer_end">
            &copy; Copyright 2018-{new Date().getFullYear()} | Codegnan IT Solutions PVT LTD
            <br />
            <p>
            <a href="">Privacy Policy</a>|<a href="">Terms ans Conditions</a>|<a href="">Refuncd Policy</a>|<a href="">Cancellation Policy</a>
            </p>
            </div>
           
        </div>
    );
}