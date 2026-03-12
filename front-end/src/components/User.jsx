import React from 'react'
import {useLocation} from "react-router"

const User = () => {
    const {state} = useLocation();
  return (
    <div>
      <h1>name: {state?.userObj?.name}</h1>
      <h1>name: {state?.userObj?.email}</h1>
      <h1>name: {state?.userObj?.phone}</h1>
    </div>
  )
}

export default User