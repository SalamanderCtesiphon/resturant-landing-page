import React from 'react'
import diningRoom from '../assets/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg'

function Home() {
  return (
    <>
      <section>
        <h2>Welcome to Resturant Page!!!</h2>
        <img src={diningRoom} alt="dining room" id="home-pic" />
        <p>Vist our Downtown location.</p>
        <h3>1232 West 124 St.</h3>
        <p>Open 11am to 11pm Mon - Sat</p>
        <a href="res">
          <button id="res-btn">Book a reservation</button>
        </a>
      </section>
    </>
  )
}

export default Home
