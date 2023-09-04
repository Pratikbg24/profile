import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
    return(
        <header className='header'>
            <div className="logo">PG</div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/eduction">EDUCATION</Link></li>
                    <li><Link to="/experience">EXPERIENCE</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                </ul>
            </nav>
        </header>
        // <div className="row">
        //     <div className="col-md-6">
        //         <label><strong>Welcome</strong></label>
        //     </div>
        //     <div className="col-md-6">
        //     <button type='button' className="btn btn-danger">Click</button>
        //     </div>
        // </div>
    );
}
export default Header;