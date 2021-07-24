import { ExpandMore, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://avatars.githubusercontent.com/u/23506587?v=4"
            alt=""
          />
          <div className="profile">
            <ExpandMore className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
