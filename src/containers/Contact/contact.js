import img2 from '../../assets/pratikImg.jpeg'
import './contact.css'
// import React,{useState} from 'react';

// function registerForm(){

// }
function Contact() {
    return (
        <div className="conatiner">
            <div className="row pageMargin">
                <div className="titleDiv">
                    <label className='subtitle'>CONTACT</label>
                    <h2 className='expTitle'>Contact With Me</h2>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                            <div className='row' style={{display:'flex', justifyContent:'center',marginBottom:'20px'}}>
                                <img className="img" src={img2} alt="web" />
                            </div>
                                <div className='row'>
                                    <div className='col-md-12 name'>
                                       <h4> Pratik Ghongade</h4>
                                    </div>
                                    <div className='col-md-12 jobT'>
                                        Software Developer
                                    </div>
                                    <div className='col-md-12 desc'>
                                        I am available for freelance work. Connect with me via and call in to my account.
                                    </div>
                                    <div className='col-md-12'>
                                        Phone : <stronge className="jobT"> +91 9130898621 </stronge>
                                    </div>
                                    <div className='col-md-12'>
                                        Email : <stronge className="jobT">pratikghongade24@gmail.com </stronge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label className='label'>Your Name</label>
                                        <input type='text' autoComplete='off' name='name' id='name' />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='label'>Phone Number</label>
                                        <input type='number' autoComplete='off' name='number' id='number' />
                                    </div>
                                    <div className='col-md-12'>
                                        <label className='label'>Email</label>
                                        <input type='email' autoComplete='off' name='email' id='email' />
                                    </div>
                                    <div className='col-md-12'>
                                        <label className='label'>Subject</label>
                                        <input type='text' autoComplete='off' name='subject' id='subject' />
                                    </div>
                                    <div className='col-md-12'>
                                        <label className='label'>Your Message</label>
                                        <textarea type='text' autoComplete='off' name='msg' id='msg' rows={4} />
                                    </div>
                                    <div className='col-md-12'>
                                        <button type='button' autoComplete='off' className='btn btns'>SEND MESSAGE</button>
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
export default Contact;