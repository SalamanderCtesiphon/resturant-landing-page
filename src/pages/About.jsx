import React from 'react'

function About() {
  return (
    <>
      <section>
        <h2>We are Resturant Page!</h2>
        <h4>welcome to resturant page... </h4>
        <p className="about">
          We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          omnis consequuntur, voluptate tempora, esse magnam doloremque ducimus
          laboriosam quod numquam commodi distinctio harum totam a, delectus
          nulla sequi. Ratione, natus.
        </p>
        <p className="about">
          Resturant page is a ficticious website which was created to
          demonstrate the power of ES6 modules. React Router is used for
          client-side navigation via the nav links in the header. A third-party
          styled componet was used for the reservation form. This is a React
          application which utilizes React Browser-Router for client-side
          navigation.
        </p>
        <span>
          Email us:{' '}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            resturantPage@resturantPage.com
          </a>
        </span>
      </section>
    </>
  )
}

export default About
