import './Project.css'
import web1 from '../../assets/web1.png'
import web2 from '../../assets/web2.png'
import web3 from '../../assets/web3.png'
import moment from 'moment';
function Project() {
    const currentDate = moment().format('YYYY MMM');
    const startDate = moment('2021-12-03','YYYY MM DD')
    const endDate = moment()

    const years = endDate.diff(startDate, 'years');
    startDate.add(years, 'years'); 

   
    const months = endDate.diff(startDate, 'months');
    startDate.add(months, 'months'); 
   

    const days = endDate.diff(startDate, 'days');
  
    const formattedResult = `${years > 0 ? `${years} Year${years !== 1 ? 's' : ''}, ` : ''}${months > 0 ? `${months} Month${months !== 1 ? 's' : ''}, ` : ''}${days} Day${days !== 1 ? 's' : ''}`;
     return (
        <div className="conatiner">
            <div className="row pageMargin">
                <div className="titleDiv">
                    <label className='subtitle'>OVER 3 YEARS OF EXPERIENCE INCLUDING INTERNSHIP</label>
                    <h2 className='expTitle'>My Experience</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-4'><img className="img" src={web2} alt="web" /></div>
                                    <div className='col-md-8'> 
                                    <div className='spaceBtn'>
                                    <div className="date">Dec 2021 - {currentDate} </div>
                                    <div className="date btns">{formattedResult}</div>
                                    </div>
                                    
                                    <div className='cname'>MindNerves Technology Services Pvt. Ltd.</div>
                                    <div className='jobTitle'> Software Developer </div>
                                    <div className='desc'>As an Angular Software Developer at MindNerves Technology Services Pvt. Ltd, I am responsible for designing and developing dynamic web applications using the Angular framework. Leveraging my expertise in front-end development and my experience with Node.js, I contribute to building robust and user-centric solutions.</div>
                                    <div className='desc'><strong>Technologies Used:</strong> Angular, HTML, CSS, JavaScript, Node.js, Express.js, RESTful APIs, Git, Postman</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-4'><img className="img" src={web1} alt="web" /></div>
                                    <div className='col-md-8'>
                                    <div className='spaceBtn'>
                                        <div className="date">Jun 2021 - Oct 2021</div>
                                        <div className="date btns">4 Months</div>
                                    </div>
                                        <div className='cname'>GMP Software Pvt.Ltd.</div>
                                        <div className='jobTitle'>Trainee, Web Designer & Developer </div>
                                        <div className='desc'>During my tenure as an Angular Trainee Software Developer at GMP Software Pvt.Ltd, I embarked on an enriching journey focused on front-end development using the Angular framework. In this role, I actively contributed to creating engaging web applications while collaborating closely with a team of seasoned developers.</div>
                                        <div className='desc'><strong>Technologies Used:</strong> Angular, HTML, CSS, JavaScript, Bootstrap, Git, Postman</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img className="img" src={web3} alt="web" />
                                    </div>
                                    <div className='col-md-8'>
                                    <div className='spaceBtn'>
                                        <div className="date">Oct 2020 - Jun 2021</div>
                                        <div className="date btns">8 Months</div>
                                    </div>
                                        <div className='cname'>IBKAAS Technologies pvt.Ltd.</div>
                                        <div className='jobTitle'>Intern, Web Designer & Developer </div>
                                        <div className='desc'>As an Angular Intern at IBKAAS Technologies Pvt. Ltd, I had the opportunity to contribute to the development and enhancement of web applications using Angular, a modern and widely-used front-end framework. During my time as an intern, I gained valuable hands-on experience working on various stages of the development lifecycle while collaborating with a skilled team of developers.</div>
                                        <div className='desc'><strong>Technologies Used:</strong> Angular, HTML, CSS, JavaScript, Bootstrap, Git, Postman</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;