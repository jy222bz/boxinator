
import React, { useState, useEffect } from 'react'
import '../../css/master.css'
import { Link } from "react-router-dom";


/**
 * A function that returns the Navbar component.
 *
 * @export {<Navbar/>}
 * @return {*}
 */
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <Link to="/addbox" replace>Add Box</Link>
          <Link to="/listboxes" replace>List Of Boxes</Link>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
  )
}