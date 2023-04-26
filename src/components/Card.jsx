import React from 'react'

function Card() {
  // TODO: import the image src, and alt from app context, and add it to the component
  const { src, alt } = {}
  return (
    <>
      {/* <img src={src} alt={alt} /> */}
      <img className="card__image" src="/placeholder.png" alt="" />
    </>
  )
}

export default Card
