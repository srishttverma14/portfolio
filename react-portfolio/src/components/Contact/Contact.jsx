import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt='Email-icon' />
          <a href="mailto:srishttverma14@gmail.com" target='_blank'>srishttverma14@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn-icon' />
          <a href="https://www.linkedin.com/in/srishti-verma-a8b809274/" target='_blank'>linkedin.com/srishti-verma</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt='github-icon' />
          <a href="https://github.com/srishttverma14" target='_blank'>github.com/srishttverma14</a>
        </li>
      </ul>
    </footer>
  )
}
