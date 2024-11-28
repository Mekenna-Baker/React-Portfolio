import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLaptopCode, faHeart, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import '../css/AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about-me" className="container mt-5">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <img src="public/images/avatar.png" alt="Mekenna Baker" className="img-fluid rounded-circle" />
                </div>

                <div className="col-md-8">
                    <h2> Welcome!  </h2>
                    <p> <FontAwesomeIcon icon={faLocationDot} /> Salt Lake City | <FontAwesomeIcon icon={faLaptopCode} /> Full Stack Developer | <FontAwesomeIcon icon={faHeart} /> Wife | <FontAwesomeIcon icon={faBabyCarriage} /> Mother </p>

                    <p> My name is Mekenna, but just call me Kenna. As a Utah native, I developed a love for hiking, camping, and exploring the mountains.   </p>

                    <p> I strive to try things that scare me every year. It has previously led me to climbing up a waterfall, skydiving, cliff diving and more.</p>
                    <p>It most recently led me to coding. I needed to get out of the house and try something new. I needed to talk to anyone who wasn&apos;t a toddler, and I did. I joined an organization called <a href="https://www.tech-moms.org/" target="_blank" rel="noopener noreferrer" className="tech-moms">Tech Moms</a> and started learning to code.</p>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;