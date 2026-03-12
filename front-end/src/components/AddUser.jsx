
import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import {useNavigate} from "react-router"
const AddUser = () => {
    const [loading, setloading] = useState(false);
    const [error,setError] = useState(null)
    const {handleSubmit,register , formState:{errors}}  = useForm();
    const navigate = useNavigate();
    const onUserCreate = async(newUser)=>{
        console.log(newUser)
        setloading(true)
        // make http post req to create new user
        try {
            let res = await fetch("http://localhost:6000/user-api/users",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            });
            if(res.status === 201){
                navigate("/users-list")
            }
            else{
                throw new Error("Error Occured")
            }
            
        } catch (error) {
            setError(error)
        }
        finally{
            setloading(false);
        }
    }
    if(loading){
        return <p className='text-red-600'>loading...</p>
    }
    if(error!=null){
        return <p className='text-red-600'>Error occured : {error.message}</p>
    }
  return (
    <div className='text-center'>
        <h1 className='text-2xl bg-gray-400 font-bold'>Add new User</h1>
      <form className='max-w-96 bg-gray-600 m-auto p-3 mt-4' action="" onSubmit={handleSubmit(onUserCreate)}>
        <input {...register("name")} className='text-xl mt-2 w-full border-transparent shadow px-5 py-2 bg-gray-300' type="text" placeholder='enter your name' />
        <input {...register("email")} className='text-xl mt-2 w-full border-transparent shadow px-5 py-2 bg-gray-300' type="email" placeholder='enter your email' />
        <input {...register("dateOfBirth")} className='text-xl mt-2 w-full border-transparent shadow px-5 py-2 bg-gray-300' type="date" placeholder='enter your dob' />
        <input {...register("phone")} className='text-xl w-full mt-2 border-transparent shadow px-5 py-2 bg-gray-300' type="text" placeholder='enter your phone number' />
        <button className='bg-blue-700 text-white px-4 py-2 rounded-2xl mt-2' type="submit">AddUser</button>
      </form>
    </div>
  )
}

export default AddUser
