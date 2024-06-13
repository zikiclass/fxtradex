import React from "react";
import "../_components/admin.css";
import NotesIcon from "@mui/icons-material/Notes";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DraftsIcon from "@mui/icons-material/Drafts";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import human from "../../../../public/img/TW2.jpeg";
import Image from "next/image";
import { project_name } from "../../../../env";
const NavBar = () => {
  return (
    <div className="ad__navbar">
      <div className="navbar__col__1">
        <Link href="/" className="s_ic_">
          <NotesIcon />
        </Link>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder={`Search ${project_name}`}
          />
          <LocationSearchingIcon style={{ fontSize: "15px" }} />
        </div>
      </div>

      <div className="navbar__col__1">
        <div className="shortcuts">
          <LightModeIcon className="s_ic" />
          <DashboardIcon className="s_ic" />
          <NotificationsIcon className="s_ic" />
          <DraftsIcon className="s_ic" />
          <SettingsIcon className="s_ic" />
        </div>
        <div className="user">
          <div className="user__">
            <span className="name">James Perl</span>
            <span className="username">@perlyrosafe</span>
          </div>
          <div>
            <Image src={human} alt="user" className="userImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
