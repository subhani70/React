import React from 'react';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    return (<>
        <div>
            <div
                className="h-[90vh] bg-cover bg-center bg-no-repeat relative text-center text-white"
                style={{
                    backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2022/01/header-hero.jpg")`,
                }}
            >

                <div className="absolute top-0 right-0 bottom-0 left-0 h-[90vh] bg-black opacity-30 z-0"></div>

                <div className="relative flex flex-col items-center justify-center h-full px-4">
                    <h2 className="text-[45px] mt-5">we all love</h2>
                    <h1 className="text-[117px] leading-none">nature</h1>
                    <p className="text-[16px] text-[#ffffff]  mt-4">
                        Look deep into nature, and you will <br /> understand everything better.
                    </p>
                    <button className='bg-[#ffd936] text-[14px] text-[#906942] py-3 px-10 mt-6 rounded'>Get Started</button>
                </div>
            </div>
        </div>
        <Services />
        <Footer/>
        </>
    );
};

export default Home;
