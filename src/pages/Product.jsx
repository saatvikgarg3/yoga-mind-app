import React from 'react'
import "../Product.css"
import { BiMessageRounded } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import Package from '../components/Package';
const Product = () => {
  return (
    <div className='fulldivproduct'>
        <div className='leftdiv'>
            <div className='yogaformindtext'>
                Yoga for Mind
            </div>
            <div className='yogaimage'>
                <img src='../../public/images/yogaimage.jpeg' alt='yogaimage'/>
            </div>
            <div className='belowphototext'>
                <div className='primarytext'>
                    What is Yoga for Mind?
                </div>
                <div className='secondarytext'>
                It is a long established fact that
                a reader will be distracted by the 
                readable content of a page when 
                looking at its layout. The point of 
                using Lorem Ipsum is that it has a m
                ore-or-less normal distribution 
                of letters, as opposed to using
                </div>
            </div>
        </div>
        <div className='rightdiv'>
            <div className='packagetext'>
                Choose Your Package
            </div>
            <div className='packages'>
                <Package
                    title='6 Months'
                    originalPrice='$3000'
                    discountedPrice='$2500'
                    perMonthPrice='$1000/month'
                />
                <Package
                    title='3 Months'
                    originalPrice='$3000'
                    discountedPrice='$2250'
                    perMonthPrice='$2000/month'
                />
                <Package
                    title='1 Month'
                    originalPrice='$2800'
                    discountedPrice='$2000'
                    perMonthPrice='$1500/month'
                />
            </div>
            <div className='belowrightdiv'>
                <div className='primarytext'>
                    What you "ll get
                </div>
                <div className='secondaryfulldiv'>
                    <div className='firstsecondary'>
                        <div className='icon'>
                            <BiMessageRounded/>
                        </div>
                        <div className='secondarytext'>
                            A Chat group on the Elda app where 
                            you can connect with your trainer and the 
                            rest of Elda Community
                        </div>
                    </div>
                    <div className='secondsecondary'>
                        <div className='icon'>
                            <FaRegClock/>
                        </div>
                        <div className='secondarytext'>
                            Ability to Reschedule your class if you miss your session
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product