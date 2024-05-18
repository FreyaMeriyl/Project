import React from 'react';
import {supabase} from './Supabase/supabase'
import './Register.css'

const Register = () => {
    const[formData, setFormData] = React.useState({
        name:'',
        contact:'',
        password:''
    })

    const handleClick = async() => {
        const {error} = await supabase.from('Register').insert({
            name: formData.name,
            contact: formData.contact,
            password: formData.password
        })
        if(!error){
            console.log("data inserted successfully")
        }
    }




  return (
    <div className='container'> 
        <h1>Register</h1>
        <form>
            <input placeholder='Full Name' id='name' name='name' onChange={e => setFormData({...formData, name: e.target.value})}/>
            <input placeholder='Contact' id='contact' name='contact' onChange={e => setFormData({...formData, contact: e.target.value})}/>
            <input placeholder='Create Password' id='password' name='password' onChange={e => setFormData({...formData, password: e.target.value})}/>

            <a className='submit' href='/dashboard' onClick={handleClick}>Submit</a>
            <h3>Already have an account?<a href='/login'> Login</a></h3>
        </form>
    </div>
  )
}


export default Register;