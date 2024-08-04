import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'

const Header = () => {
  const {name} = useSelector(state => state.user)
  return (
    <div className='header'>
      <h1>{name} Academy</h1>
      <h2>Hello {name} </h2>
    </div>
  )
}

export default Header