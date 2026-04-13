import React from 'react';

const Banner = () => {
    return (
        <div className='pt-20 pb-10 bg-[#F8FAFC]'>
            <div className='container mx-auto flex flex-col justify-center items-center w-[90%]'>
                <h1 className='text-5xl font-bold mb-4 text-center'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] mb-8 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br> relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white font-semibold rounded-md'>+ Add a Friend</button>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6 container mx-auto mt-10 w-[90%]'>
                <div className='w-[260px] bg-white p-8 flex flex-col items-center'>
                    <h5 className='text-3xl font-semibold'>10</h5>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='w-[260px]  h-auto bg-white p-8 flex flex-col items-center'>
                    <h5 className='text-3xl font-semibold'>10</h5>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='w-[260px]  h-auto bg-white p-8 flex flex-col items-center'>
                    <h5 className='text-3xl font-semibold'>10</h5>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='w-[260px]  h-auto bg-white p-8 flex flex-col items-center'>
                    <h5 className='text-3xl font-semibold'>10</h5>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
            </div>
            <hr className='text-[#E9E9E9] mt-10 container mx-auto'></hr>
        </div>
    );
};

export default Banner;