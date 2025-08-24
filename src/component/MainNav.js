import React from 'react'
import { Link } from 'react-router-dom'


const MainNav = () => {
  return (
    <>
 <div className="main-nav">
        <span className="logo">MJCRUDER</span>
        <div className="nav-links">
          <Link to='/category'>Category List</Link>
          <Link to='/add-category'>Add new Category</Link>
        </div>
      </div>
    </>
  )
}

export default MainNav