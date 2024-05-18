import React, { useState } from 'react';
import {supabase} from './Supabase/supabase'
import './Register.css'

const Login = () => {
    const[formData,setFormData] = useState({
        password:'', contact:''
    })

    console.log(formData)

    function handleChange(event){
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const {data,error} = await supabase.auth.signInWithPassword(
                {
                    contact:formData.contact,
                    password:formData.password,
                }
            )
            if (error) throw error
            console.log(data)

        } catch(error){
            alert(error)
        }
    }

    return (
        <div className='container'> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='Contact' name='contact' id='contact' onChange={handleChange}/>
                <input placeholder='Password' name='password' id='password' onChange={handleChange}/>
    
                <a className='submit' type='submit'>Submit</a>
                <h3>Don't have an account?<a href='/register'> Register</a></h3>
            </form>
        </div>
    )
}


export default Login;
