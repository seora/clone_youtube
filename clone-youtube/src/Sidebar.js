import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionIcon from '@material-ui/icons/SubscriptionsOutlined';
import MovieCreationIcon from '@material-ui/icons/MovieCreationOutlined';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="홈"/>
            <SidebarRow Icon={ExploreOutlinedIcon} title="탐색"/>
            <SidebarRow Icon={SubscriptionIcon} title="구독"/>
            <SidebarRow Icon={MovieCreationIcon} title="보관함"/>
            <hr />
        </div>
    )
}

export default Sidebar



