import React from 'react'
import './popular.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'

const Popular = () => {
  return (
    <div>
      <div className="popular__container">
        <h2>popular destinations</h2>
        <p>Tours give you the opportunity to see a lot, within a time frame. </p>
        <div className="popular__flex">
          <div className="popular__item">
            <div className="popular__text">
              <h3>taal volcano, batangas</h3>
              <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including vollcanic  rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
            </div>
            <div className="popular__images">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="popular__item">
            <div className="popular__text padding__reverse">
              <h3>taal volcano, batangas</h3>
              <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including vollcanic  rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
            </div>
            <div className="popular__images order__reverse">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular