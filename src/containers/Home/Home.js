import './Home.css'
import raj from '../../assets/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
function Home() {
    return (
        <div className="conatiner">
            <div className="row pageMargin">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card card1">
                            <div className="card-body">
                             <FontAwesomeIcon icon={faUser} className="iconCss"/>
                            <h2 className="card-title"> Hi, I'm <span className="myName">Pratik</span></h2>
                                <p className="card-text textColor margin">Software developer working for MindeNerves.com in Pune, India.</p>
                                <div className="row">
                                    <div className="col-md-12 textColor"><FontAwesomeIcon  icon={faFile} className='iconscss'/> Software Developer</div>
                                    <div className="col-md-12 textColor"><FontAwesomeIcon  icon={faEnvelope} className='iconscss'/>pratikghongade24@gmail.com</div>
                                    <div className="col-md-12 textColor"><FontAwesomeIcon  icon={faLocationDot} className='iconscss'/>Pune, India</div>
                                </div>
                            </div>
                        </div>
                        <div className="card card2">
                            <div className="card-body">
                                <p className="card-text">Download my curriculum vitae:</p>
                                <div className="row">
                                    <div className="col-md-12 space">
                                        <button className="btn btns">DOWNLOAD CV</button>
                               
                                        <button className="btn btns">CONTACT ME</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card card3">
                            <div className='card3css'>
                            <img  className='imgHome' src={raj} alt="Profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;