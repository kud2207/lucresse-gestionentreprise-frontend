import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>CATECHDIGITAL</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                        <p className="title">MAIN</p>
                 <li >
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <CardTravelIcon className='icon' />
                        <span>Oders</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertCommentIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profiles</span>
                    </li>
                    <li>
                        <InputOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="botton">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar