import React from 'react';
import bannerImg from '../../../assets/images/treatment.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const SecBanner = () => {
    return (
        <div className="py-52">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <img src={bannerImg} className="rounded-lg lg:w-1/2 shadow-2xl lg:max-w-md" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecBanner;