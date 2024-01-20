import React from 'react'
import {card} from '../assets'
import styles,  {layout} from '../styles'
import Button from './Button'

const CardDeal = () => 
  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Hoobank, we understand that finding the perfect credit card for your business is crucial. 
        Our user-friendly comparison tool simplifies the process, providing you with personalized recommendations tailored to your unique needs.  
        Take the first step towards financial success with Hoobank—your partner in finding a better card deal effortlessly."
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`flex-[0.9] flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative `}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )


export default CardDeal