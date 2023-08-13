// styles
import "./Navbar.css";
import temple from "../assets/temple.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={temple} alt='dojo logo' />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
