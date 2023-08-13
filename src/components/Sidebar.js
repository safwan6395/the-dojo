import { NavLink } from "react-router-dom";

// styles & images
import "./Sidebar.css";
import dashboardIcon from "../assets/dashboard_icon.svg";
import addIcon from "../assets/add_icon.svg";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          {/* avatar and username here later */}
          <p>Hey User</p>
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
