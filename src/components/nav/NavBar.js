import './NavBar.scss';
import {Icon, NavBarButtons} from "./NavBarComponents";
import logo from "../../assets/images/aadithiya.png";
import {NavButton} from "../button/Button";

function NavBar() {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <Icon src={logo}/>
        <NavBarButtons>
          <NavButton>
            Home
          </NavButton>
          <NavButton>
            page 2
          </NavButton>
          <NavButton>
            page 3
          </NavButton>
          <NavButton>
            page 4
          </NavButton>
        </NavBarButtons>
      </div>
    </div>
  );
}

export default NavBar;
