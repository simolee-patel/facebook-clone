import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}
                title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow Icon={PeopleIcon} title="Pages" />
            <SidebarRow Icon={ChatIcon} title="Friends" />
            <SidebarRow Icon={StorefrontIcon} title="Messenger" />
            <SidebarRow Icon={VideoLibraryIcon} title="Video" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
