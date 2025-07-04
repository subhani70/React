import React from 'react'

const Services = () => {
  return (
   <div>
            <div
                className="h-[58vh] bg-cover bg-center bg-no-repeat relative text-center text-white"
                style={{
                    backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2025/06/ales-krivec-N-aTikX-b00-unsplash.jpg")`,
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 h-[58vh] bg-black opacity-30 z-0"></div>
                <div className="relative flex flex-col items-center justify-center h-full px-4">
                    <h2 className="text-[75px] mt-5">our services</h2>
                </div>
            </div>
        </div>
  )
}

export default Services