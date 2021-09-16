import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header(){

    const [inputSearch, setInputsearch] = useState("");

    return (
        <div className = "header">
            <div className = "header_left" >
                <MenuIcon />
                <Link to="/">
                    <img 
                        className="header_logo"
                        src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt=""
                    />
                </Link>
            </div>

            <div className ="header_input">
                <input 
                    onChange={e => setInputsearch(e.target.value)} 
                    value = {inputSearch} 
                    placeholder="Search" 
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className ="header__inputButton"/>
                </Link>

            </div>

            <div className ="header_icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationIcon className="header__icon"/>
                <Avatar
                    alt = "Seora"
                    src = "https://w7.pngwing.com/pngs/702/840/png-transparent-emoji-emoji-emoticon-smiley-emoji-face-smiley-desktop-wallpaper-thumbnail.png"
                />
            </div>
        
        </div>
    );
}


export default Header