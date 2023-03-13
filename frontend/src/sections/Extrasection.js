import React from 'react';

const Extrasection = () => {
    return (
        <div className='my-5 pt-5  py-10'>
            <h1 className='text-5xl text-center font-bold uppercase my-5 text-green-500'>OUR <span className='text-orange-500'>SUMMARY</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='bg-green-500 text-center text-white p-10 shadow-lg text-2xl rounded'>
                    TOTAL PRODUCT: <span className=' font-bold'>400+</span>
                </div>
                <div className='bg-blue-500  text-center text-white p-10 shadow-lg text-2xl  rounded'>
                    TOTAL Catagory: <span className='font-bold'>20+</span>
                </div>
                <div className='bg-orange-500  text-center text-white p-10 shadow-lg text-2xl  rounded'>
                    TOTAL ORDER: <span className='font-bold'>100+</span>
                </div>
                <div className='bg-red-500  text-center text-white p-10 shadow-lg text-2xl  rounded'>
                    TOTAL CUSTOMER: <span className='font-bold'>1400+</span>
                </div>

                
            </div>
        </div>
    );
};

export default Extrasection;