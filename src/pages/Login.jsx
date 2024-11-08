import React from 'react'
import styles from './Login.module.css'
import image from '../assets/image 466.png'
import Form from '../components/Form'

export default function Login() {
  const formFields =[


    {
      name:'name',
      type:'text',
      placeholder:'Enter your name'
    },


    {
      name:'password',
      type:'password',
      placeholder:'Enter your password'
    },

  ]
  return (
    <div className={styles.container}>
      <div className={styles.left}>
         <Form formFields={formFields} isUser={true}/>
      </div>
      <div className={styles.right}>
      <p className={styles.heead}>Your Personal Job Finder</p>
      <img className={styles.image} src={image} alt="" />
      </div>
    </div>
  )
}
