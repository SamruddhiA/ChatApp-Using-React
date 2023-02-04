import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className='logo'>Chat</span>
        <div className='user'>
            <img src={currentUser.photoURL} alt=""/>
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut()}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
