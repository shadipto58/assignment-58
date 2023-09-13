import React from 'react';
import './MakeAppoient.css'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import bgImg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import smallDoctor from '../../../assets/images/doctor-small.png'

const MakeAppoient = () => {
    return (
        <div
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'cover',
                backgroundPosition: 'center'
            }}
            className="py-52 mt-24 relative">
            <div className="makeAppoient ">

                <img src={doctor} className='bottom-0 left-0 absolute big-doctor' alt="" />
                <img src={smallDoctor} className="rounded-lg shadow-2xl lg:max-w-md small-doctor" />


                <div className='w-1/2 p-5'>
                    <h3 className='text-xl text-secondary font-bold pb-5'>Appointment</h3>
                    <h2 className='text-4xl text-white pb-5'>Make an appointment Today</h2>
                    <p className='max-w-lg text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoient;