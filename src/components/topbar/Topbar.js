import React from 'react';
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Laadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNone />
                        <span className="topiconBadge"></span>
                    </div>
                    <div className="topbarIcons">
                        <Language />
                        <span className="topiconBadge"></span>
                    </div>
                    <div className="topbarIcons">
                        <Settings />
                    </div>
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="topAvatar"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
