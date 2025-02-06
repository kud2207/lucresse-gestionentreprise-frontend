import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        home contenaire
      </div>
    </div>
  )
}

export default Home