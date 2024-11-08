import React from 'react'
import styles from './Register.module.css'
import image from '../assets/image 466.png'
import Form from '../components/Form'

export default function Register() {
  const formFields  =[
    {
      name:'name',
      type:'text',
      placeholder:'Enter your name'
    },
    {
      name:'email',
      type:'email',
      placeholder:'Enter your email'
    },
    {
      name:'password',
      type:'password',
      placeholder:'Enter your password'
    },
    {
      name:'mobile',
      type:'number',
      placeholder:'Enter your mobile number'
    },
    {
      name:'checkbox',
      type:'checkbox',
      label:'Enter your mobile number'
    }
  ]

  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <Form formFields={formFields} />
        </div>
        <div className={styles.right}>
           <p className={styles.heead}>Your Personal Job Finder</p>
           <img className={styles.image} src={image} alt="" />
           
        </div>
    </div>
  )
}
