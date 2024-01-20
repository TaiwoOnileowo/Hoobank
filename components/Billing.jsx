import React from 'react'
import {apple, bill, google} from '../assets'
import styles ,{layout} from '../styles'
const Billing = () => 
   (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 top-0 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        <div/>
      </div>
     <div className={layout.sectionInfo}>
     <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/>billing & invoicing</h2>
     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Hoobank maintains speedy and secure transactions through our platforms and applications. 
     Businesses can now track payments in real-time using Hoobank's services.
      We also provide tools for businesses to customize their invoices to reflect their brand.
      We ensure dedicated customer support to address any billing related concerns.</p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt='apple_store' className='w-[128px] h-42px object-contain mr-5 cursor-pointer'/>
        <img src={google} alt='google' className='w-[128px] h-42px object-contain cursor-pointer'/>

      </div>

     </div>
    </section>
  )


export default Billing