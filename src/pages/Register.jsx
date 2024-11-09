import React, { useState } from 'react'
import styles from './Register.module.css'
import image from '../assets/image 466.png'
import Form from '../components/Form'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'

export default function Register() {
 

   const [formData,setFormData] =useState({
    name:'',
    email:'',
    password:'',
    mobile:''
   })
  const formFields  =[
    {
      name:'name',
      type:'text',
      placeholder:'Enter your name',
      value:formData.name,
      onchange:(e)=>{setFormData({...formData,name:e.target.value})}
     
    },
    {
      name:'email',
      type:'email',
      placeholder:'Enter your email',
      value:formData.email,
      onchange:(e)=>{setFormData({...formData,email:e.target.value})}
    },
    {
      name:'password',
      type:'password',
      placeholder:'Enter your password',
      value:formData.password,
      onchange:(e)=>{setFormData({...formData,password:e.target.value})}
    },
    {
      name:'mobile',
      type:'number',
      placeholder:'Enter your mobile number',
      value:formData.mobile,
      onchange:(e)=>{setFormData({...formData,mobile:e.target.value})}
    },
 
  ]

  const notify =(data)=>{
    toast(data,{
    className:'custom-toast',
    progressClassName:'custom-progress-login',
    style:{color:'white',fontFamily:'Poppins',fontWeight:'bold',textAlign:'center',fontSize:'15px'}
    })
    }


  const handleLoginCLick = async ()=>{
    console.log('login clicked')
    if(formData.name.length <0 || formData.email.length <0  || formData.password.length <0 || formData.mobile.length <0){
      console.log("Fields are required")
    }
    
    const res = await axios.post('http://localhost:3000/user/register',formData,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      }})
   notify(res.data.message)


    
    // console.log(formData)
  }

  
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <Form formFields={formFields} handleLoginCLick={handleLoginCLick} />
        </div>
        <div className={styles.right}>
           <p className={styles.heead}>Your Personal Job Finder</p>
           <img className={styles.image} src={image} alt="" />
           
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}
