import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
        Hi, I'm Srishti Verma
        </h1>
        <p className={styles.description}>
        I'm a Pre-Final Year student of Vellore Institute of Technology Andhra Pradesh. I am currently pursuing my Bachelors in Computer Science Engineering.
        </p>
        <a href='mailto:srishttverma14@gmail.com' className={styles.contactBtn} target='_blank'>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='Hero image of me' className={styles.heroImg}/>
      <div className={styles.topblur}/>
      <div className={styles.bottomblur}/>
    </section>
  )
}
