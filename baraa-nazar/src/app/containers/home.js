import React from 'react'
// import {NavLink} from "react-router-dom"

function Home() {
  return (
    <div className='flex justify-center w-screen'>
      <nav>
        <ul className='text-9xl space-y-10 mt-10 ml-40'>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <img src='https://media.istockphoto.com/id/1363870863/photo/happy-young-man-with-beard-looking-away-and-smiling.jpg?b=1&s=170667a&w=0&k=20&c=DXLL7YQ8Qm-q4l8mDrKpXQ3s7kQMZln9mXinmLcdsmQ=' alt='man-black-bg'/>
    </div>
  )
}

export default Home