import { Link } from "react-router-dom";

// styles & images
import "./Navbar.css";
import temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={temple} alt='dojo logo' />
          <span>The Dojo</span>
        </li>
        {user ? (
          <li>
            {!isPending && (
              <button className='btn' onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className='btn' disabled>
                Logging out...
              </button>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
export default Navbar;
