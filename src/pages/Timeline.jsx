import React, { useContext } from 'react';
import { TimelineContext } from '../Contexts/TimelineProvider';
import CallIcon from '../assets/call.png'

const Timeline = () => {

    const {callFriend} = useContext(TimelineContext);
    console.log(callFriend)

    return (
        <div className='p-20 bg-[#F8FAFC]'>
            <div className='container mx-auto'>
            <h1 className='text-5xl font-bold mb-6'>Timeline</h1>
            {callFriend.map(friend => <div className='flex items-center gap-4 p-4 bg-white rounded-md mb-6'>
                <div>
                    <img src={CallIcon} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-medium'>Call <span className='text-[#64748B]'>with {friend.name}</span></h4>
                    {new Date().toLocaleDateString()}
                </div>
            </div>)}

            </div>
        </div>
    );
};

export default Timeline;