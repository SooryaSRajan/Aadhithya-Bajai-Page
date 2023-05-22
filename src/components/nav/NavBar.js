import './NavBar.scss';
import {Icon} from "./NavBarComponents";
import logo from "../../assets/images/aadithiya.png";
import {Button} from "../button/Button";

function NavBar() {
    return (
      <div className="nav-bar-wrapper">
          <div className="nav-bar">
              <Icon src={logo}/>
          </div>
      </div>
    );
}

export default NavBar;
