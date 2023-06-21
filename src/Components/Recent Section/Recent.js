import React from 'react'
import './recent.css'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img8 from '../../assets/8.jpg'


const Recent = () => {
  return (
    <div>
      <div className="recent__container">
        <h2>recent trips</h2>
        <p>You can discover unique destinations using Google Maps. </p>
        <div className="recent__grid">
          <div className="recent__item">
            <img src={img6} alt="" />
            <h3>trip in indonesia</h3>
            <p>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
          </div>
          <div className="recent__item">
            <img src={img5} alt="" />
            <h3>trip in indonesia</h3>
            <p>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
          </div>
          <div className="recent__item">
            <img src={img8} alt="" />
            <h3>trip in indonesia</h3>
            <p>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recent