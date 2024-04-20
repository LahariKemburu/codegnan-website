import './training_template.css';
export default function Training_template(props) {
    const { head, middle } = props;
    const { title: headTitle, p: headP, language: headL, duration:headDuation, price:headPrice ,rating:headrating } = head;
    const { title } = props;
    return (
        <div className='tth'>
            <center>
                <div className='download_broucher'><button>Need more info? <span>Download the Brochure</span></button></div>
            </center>
            <div className='course_head_details'>
                    <h2>{headTitle}</h2><span className='ins'>#1 Institute</span>
                    <p>{headP}</p>
                    <div>
                    <i class="far fa-comment"></i>{headL}
                    <i class="fa-solid fa-calendar-days"></i>{headDuation}
                    <i class="fas fa-inr"></i>{headPrice}
                    <span>({headrating} Rating)</span>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                   
                    <a href="">Limited Time Offer.Enroll Your Name <span>&rarr;</span></a>
                </div>
                <div className='form'>

                </div>


        </div>
    );
}