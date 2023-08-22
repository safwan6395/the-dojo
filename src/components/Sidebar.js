import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

// styles & images
import "./Sidebar.css";
import dashboardIcon from "../assets/dashboard_icon.svg";
import addIcon from "../assets/add_icon.svg";

function Sidebar({ img, name }) {
  const { user } = useAuthContext();

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/'>
                <img src={dashboardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={addIcon} alt='add icon' />
                <span>Create</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Sidebar;
