import React from 'react'

function Reservation() {
  return (
    <form className="form">
      <p className="title">Book a Reservation</p>
      <p className="message">
        Please fill out the form below to book your reservation.
      </p>
      <div className="flex">
        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Firstname</span>
        </label>
        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Lastname</span>
        </label>
      </div>
      <label>
        <input className="input" type="email" placeholder="" required />
        <span>Email</span>
      </label>
      <label>
        <input className="input" type="text" placeholder="" required />
        <span>Date and Time</span>
      </label>
      <label>
        <input className="input" type="text" placeholder="" required />
        <span>Confirm your reservation time and date</span>
      </label>
      <button className="submit">Submit</button>
    </form>
  )
}

export default Reservation
