import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CallIcon from '../assets/call.png'
import TextIcon from '../assets/text.png'
import VideoIcon from '../assets/video.png'
import { TimelineContext } from '../Contexts/TimelineProvider';

const FriendDetails = () => {

    const {id} = useParams();
    // console.log(id)

    const friends = useLoaderData()
    // console.log(friends);

    const expectedFriend = friends.find(friend => friend.id == id);
    // console.log(expectedFriend)

     const statusColor = () => {
        if(expectedFriend.status == 'overdue'){
            return "bg-[#EF4444] px-3 py-1 rounded-full text-white"
        }
        else if(expectedFriend.status == 'almost due'){
            return "bg-[#EFAD44] px-3 py-1 rounded-full text-white"
        }
        else{
            return "bg-[#244D3F] px-3 py-1 rounded-full text-white"
        }
    }


    const { handleCall , callFriend , handleText , textFriend , handleVideo , videoFriend} = useContext(TimelineContext);
    // console.log(handleCall , callFriend)


    return (
        
        <div className='bg-[#F8FAFC] p-20'>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>

                <div className='col-span-3 lg:col-span-1'>
                    <div className='bg-white flex flex-col justify-center items-center p-6 rounded-md shadow-sm space-y-3 mb-4'>
                        <img className='rounded-full' src={expectedFriend.picture} alt="" />
                        <h1 className='text-xl font-semibold'>{expectedFriend.name}</h1>
                        <span className={statusColor()}>{expectedFriend.status}</span>
                        <div className='flex justify-center items-center gap-1'>
                            <span className='bg-[#CBFADB] px-3 py-1 rounded-full'>{expectedFriend.tags[0]}</span>
                            <span className={`${expectedFriend.tags[1] ? "bg-[#CBFADB] px-2 py-1 rounded-full" : ""}`}>{expectedFriend.tags[1]}</span>
                        </div>
                        <p className='text-[#64748B]'>"{expectedFriend.bio}"</p>
                        <p className='text-[#64748B]'>Preferred : {expectedFriend.preferred_contact}</p>
                    </div>
                    <div className='flex flex-col justify-center gap-2'>
                        <button className='btn'>Snooze 2 weeks</button>
                        <button className='btn'>Archive</button>
                        <button className='btn'>Delete</button>
                    </div>

                </div>

                <div className='col-span-2 space-y-10'>
                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-white p-8 flex flex-col items-center'>
                            <h5 className='text-3xl font-semibold mb-1'>{expectedFriend.days_since_contact}</h5>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>

                        <div className='bg-white p-8 flex flex-col items-center'>
                            <h5 className='text-3xl font-semibold mb-1'>{expectedFriend.goal}</h5>
                            <p className='text-[#64748B]'>Goal (Days)</p>
                        </div>

                        <div className='bg-white p-8 flex flex-col items-center'>
                            <h5 className='text-3xl font-semibold mb-1'>{expectedFriend.next_due_date}</h5>
                            <p className='text-[#64748B]'>Next Due</p>
                        </div>
                    </div>

                    <div className='col-span-3 bg-white p-6 rounded-md'>
                        <div className='flex justify-between mb-4'>
                            <h4 className='text-[#244D3F] text-xl font-medium'>Relationship Goal</h4>
                            <button className='btn'>Edit</button>
                        </div>
                        <h4>Connect every <span className='text -[18px] font-bold'>{expectedFriend.goal} days</span></h4>
                    </div>

                   <div className='col-span-3 bg-white p-6 rounded-md'>
                        <h3 className='mb-4 text-xl font-medium'>Quick Check-In</h3>

                        <div className='grid grid-cols-3 gap-4'>
                            <div onClick={() => handleCall(expectedFriend)} className='px-10 py-4 bg-[#F8FAFC] rounded-md flex flex-col justify-center items-center gap-2'>
                                <img src={CallIcon} alt="" />
                                <p>Call</p>
                            </div>
                            <div onClick={() => handleText(expectedFriend)} className='px-10 py-4 bg-[#F8FAFC] rounded-md flex flex-col justify-center items-center gap-2'>
                                <img src={TextIcon} alt="" />
                                <p>Text</p>
                            </div>
                            <div onClick={() => handleVideo(expectedFriend)} className='px-10 py-4 bg-[#F8FAFC] rounded-md flex flex-col justify-center items-center gap-2'>
                                <img src={VideoIcon} alt="" />
                                <p>Video</p>
                            </div>
                        </div>
                    </div>
                </div>

                



            </div>
        </div>
    );
};

export default FriendDetails;