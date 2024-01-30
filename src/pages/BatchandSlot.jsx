import React, { useState } from 'react'
import "../batchandslot.css"
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {usePackageContext} from '../context/PackageContext'
import { MdKeyboardArrowLeft } from "react-icons/md";
import StartDateCarousel from '../components/StartDateCarousel';
const BatchandSlot = () => {
  const navigate = useNavigate();
  const { selectedPackage } = usePackageContext();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const handleRadioChange = (value) => {
    setSelectedSlot(value);
  };

  console.log(selectedPackage)
  const navigateRoute = (route) => {
    navigate(route);
  };

  const Packagebuyhandler=()=>{
    if(selectedSlot) 
        alert("Your Time slot and Start Date is Selected and Package Bought, Thanks :)")
    else alert("Please Select the time slot and date to start");
  }
  return (
    <div className='fulldivslot'>
        <div className='yogaformindtextslot'>
            Yoga for Mind
        </div>
        <div className='imageslot'>
            <img src='../../public/images/yogaslot.jpg' alt='yoga image'/>
        </div>
        <div className='textslot'>
            <div className='primarytextslot'>
                What is Yoga For Mind
            </div>
            <div className='secondarytextslot'>
                'Content here, content here', making 
                it look like readable English. Many 
                desktop publishing packages and web 
                page editors now use Lorem Ipsum as 
                their default model text, and a 
                search for 'lorem ipsum' will uncover
                many web sites still in their infancy
            </div>
        </div>
        <div className='routes'>
            <div className='yogaroute' onClick={()=>{navigateRoute('/home')}}><FaLocationArrow/> Yoga</div> 
            <div className='yogahomeroute' onClick={()=>{navigateRoute('/home')}}><FaLocationArrow/> Yoga for Mind</div> 
            <div className='yogapackageroute' onClick={()=>{navigateRoute('/product')}}><FaLocationArrow/> Package</div>
        </div>
        <div className='planname'>
            <div className='plantitle'>
                {selectedPackage? selectedPackage.title+"Yoga for Mind" : "No Package Selected"} 
            </div>
            <div className='plantime'>
                <span className='plantimesecondary'>5 days a week</span>
                <span className='changename' onClick={()=>{navigateRoute('/product')}}>Change Plan</span>
            </div>
        </div>
        <div className='startdate'>
            <div className='startdatetitle'>
                Pick a start date
            </div>
            <div className='startdatedesc'>
                Dates are avaialble only for next 2 weeks
            </div>
            <div className='startdatecarousel'>
                <div className='arrowicon'><MdKeyboardArrowLeft/></div>
                <div><StartDateCarousel/></div>
            </div>
        </div>
        <div className='timeslot'>
            <div className='timeslottitle'>
                Select Time Slot
            </div>
            <div className='allslots'>
                <div className='slot' id='firstslot'>
                    <div className="checkbox-container">
                        <input
                            type="radio"
                            id="firstRadio"
                            name="timeSlot"
                            value="first"
                            checked={selectedSlot === 'first'}
                            onChange={() => handleRadioChange('first')}
                    />
                    </div>
                    <div className='slotdescription' onClick={() => handleRadioChange('first')}>
                        <div className='time'>
                            <div className='timeicon'><FaRegClock/></div>
                            <div className='timedetails'>05:00 PM - 05:40 PM</div>
                        </div>
                        <div className='days'>MON,TUE,WED,THU,FRI</div>
                    </div>
                </div>
                <div className='slot' id='secondslot'>
                <div className="checkbox-container">
                    <input
                        type="radio"
                        id="secondRadio"
                        name="timeSlot"
                        value="second"
                        checked={selectedSlot === 'second'}
                        onChange={() => handleRadioChange('second')}
                />
                </div>
                    <div className='slotdescription' onClick={() => handleRadioChange('second')}>
                        <div className='time'>
                            <div className='timeicon'><FaRegClock/></div>
                            <div className='timedetails'>08:00 AM - 08:40 AM</div>
                        </div>
                        <div className='days'>MON,TUE,WED,THU,FRI</div>
                    </div>
                </div>
            </div>
        </div>
        <button className='buypackage' onClick={Packagebuyhandler}>BUY PACKAGE</button>
    </div>
  )
}

export default BatchandSlot