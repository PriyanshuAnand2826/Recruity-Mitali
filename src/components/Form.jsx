import React from 'react'
import styles from './Form.module.css'
export default function Form({formFields,isUser,handleLoginCLick}) {
  return (
    <div>
      <p style={{fontWeight:'bold',fontSize:'20px'}}>{isUser? "Already have an account ?": "Create an account"} </p>
      <span>Your personal job finder is here</span>
     
      {formFields.map((item,index)=>{
        return(
          <div className={styles.input_field}>
          <input className={styles.input} type={item.type} name={item.name} placeholder={item.placeholder} value={item.value} onChange={item.onchange} />
           
          </div>
        )
      })}
      <button className={styles.btn} onClick={handleLoginCLick}>{isUser ? "Sign In" : "Create Account"}</button>
      <p style={{marginTop:'2%'}}>{isUser ? "Don’t have an account?":"Already have an account ?"} <span style={{textDecoration:'underline',cursor:'pointer'}}>{isUser ? "Sign Up ? " : "Sign In ?"}</span></p>
    </div>

  )
}
