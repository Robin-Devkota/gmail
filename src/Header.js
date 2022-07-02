import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser,logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch} from "react-redux";

function Header() {
  const user =useSelector(selectUser);
  const dispatch=useDispatch();
  const signOut=()=>{

    auth.signOut().then(()=>{
      dispatch(logout());

    });
   

  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
        <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search Email" />
        <ArrowDropDownIcon className="header__inputcaret " />
      </div>
      <div className="header__right">
      <IconButton>
        <AppsIcon />
        </IconButton>
        <IconButton>
        <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <Avatar onClick={signOut}src={user?. photoUrl}/>

        </IconButton>

      </div>
    </div>
  );
}

export default Header;
