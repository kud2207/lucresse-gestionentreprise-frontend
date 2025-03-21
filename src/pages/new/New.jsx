import React from 'react'
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined';


function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor='file'>
                 Image :  <DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type="file" id='file'
                  style={{display:"none"}}
                />
              </div>
              <div className="formInput">
                <label >Username</label>
                <input type="text" placeholder='ulruch_kageu' />
              </div>
              <div className="formInput">
                <label >Name and surname</label>
                <input type="text" placeholder='ulruch kageu' />
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="text" placeholder='ulrichkageu@gmail.com' />
              </div>
              <div className="formInput">
                <label >Phone</label>
                <input type="text" placeholder='692134088' />
              </div>
              <div className="formInput">
                <label >Address</label>
                <input type="text" placeholder='Pakita essos' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New