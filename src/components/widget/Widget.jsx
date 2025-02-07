import React from 'react';
import './widget.scss';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {

    let data;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all user",
                icon: <PersonOutlineIcon
                    className='icon'
                    style={{
                        color: "blue",
                        backgroundColor: 'lightblue',
                    }} />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "Vieu all orders",
                icon: <ShoppingCartOutlinedIcon
                    className='icon'
                    style={{
                        color: "orange",
                        backgroundColor: 'lightgoldenrodyellow',
                    }}
                />
            };
            break;
        case "earning":
            data = {
                title: "ERARNINGS",
                isMoney: true,
                link: "view net earnings",
                icon: <MonetizationOnOutlinedIcon
                    className='icon'
                    style={{
                        color: "red",
                        backgroundColor: 'lightpink',
                    }}
                />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon
                    className='icon'
                    style={{
                        color: "green",
                        backgroundColor: 'lightgreen',
                    }} />
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">
                    {data.isMoney && "$"} 200
                </div>
                <div className="link">
                    {data.link}
                </div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardControlKeyIcon />
                    20 %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget