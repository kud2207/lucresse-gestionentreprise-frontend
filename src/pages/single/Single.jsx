import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './single.scss'
import ChartComponent from '../../components/chart/Chart'
import Datateble from '../../components/datatable/Datateble'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://picsum.photos/800"
               alt=""
               className='itemImg'
               />
               <div className="details">
                 <h1 className="itemTitle">Kageu ulrich</h1>
                 <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">kageuulrich@gamil.com</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+237 692134088</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemValue">essos, avenir germain</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">Cameroon</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="right">
            <ChartComponent/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">More information</h1>
          <Datateble/>
        </div>
      </div>
    </div>
  )
}

export default Single  