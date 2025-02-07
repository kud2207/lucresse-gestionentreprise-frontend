import React from 'react'
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar'; //pou le cercle
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';




const Featured = () => {
    const percentage = 68;
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenu</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="botton">
                <div className="featuredChart">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`} 
                        strokeWidth={5}
                        />
                </div>
                <div className="title">Total sales made today</div>
                <div className="amount">$ 266</div>
                <div className="desc">
                    Previous transactions processing . Last payments may not be included.
                    Previous transactions processing . Last payme.
                </div>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle"> Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$33.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle"> Last day</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$51.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle"> Last week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured