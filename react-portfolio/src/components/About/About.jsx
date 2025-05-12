import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon"/>
            <div>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience in building responsive and optimized websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server-icon"/>
            <div>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="coder-icon"/>
            <div className={styles.aboutItemText}>
              <h3>Coder</h3>
              <p>I have solved many problems of Data Structures and Algorithms on various coding platforms.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
