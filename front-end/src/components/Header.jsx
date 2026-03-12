import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
      <nav className='bg-[#2f2626] text-white items-center flex gap-5 p-2 justify-between'>
        <img className='w-10 rounded-3xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s" alt="" />
        <div className='flex gap-5 items-center text-xl justify-around px-10'>
          <NavLink className={({isActive})=> isActive? "text-red-600" : ""} to={"/"}>Home</NavLink>
          <NavLink className={({isActive})=> isActive? "text-red-600" : ""} to={"add-user"}>Add User</NavLink>
          <NavLink className={({isActive})=> isActive? "text-orange-600" : ""} to={"users-list"}>Users</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header