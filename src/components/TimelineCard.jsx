import React, { useContext } from 'react';
import CallIcon from '../assets/call.png'
import TextIcon from '../assets/text.png'
import VideoIcon from '../assets/video.png'
import { TimelineContext } from '../Contexts/TimelineProvider';

const TimelineCard = ({friend}) => {

    // console.log(friend);
    
    const {callFriend , textFriend , videoFriend} = useContext(TimelineContext);
    // console.log(callFriend);
    // console.log(textFriend);
    
    const findCallFriend = callFriend.filter(f => friend === f);
    console.log(findCallFriend)

    const findTextFriend = textFriend.filter(f => friend === f);
    console.log(findTextFriend)
    
    const findVideoFriend = videoFriend.filter(f => friend === f);
    console.log(findVideoFriend)


    if (findCallFriend.length !== 0){
        return  <div className='flex items-center gap-4 p-4 bg-white rounded-md mb-6'>
                <div>
                    <img src={CallIcon} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-medium'>Call <span className='text-[#64748B]'>with {friend.name}</span></h4>
                    {new Date().toLocaleDateString()}
                </div>
            </div>
    }

    else if(findTextFriend.length !== 0){
        return  <div className='flex items-center gap-4 p-4 bg-white rounded-md mb-6'>
                <div>
                    <img src={TextIcon} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-medium'>Text <span className='text-[#64748B]'>with {friend.name}</span></h4>
                    {new Date().toLocaleDateString()}
                </div>
            </div>
    }

    else if(findVideoFriend.length !== 0){
        return <div className='flex items-center gap-4 p-4 bg-white rounded-md mb-6'>
                <div>
                    <img src={VideoIcon} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-medium'>Video <span className='text-[#64748B]'>with {friend.name}</span></h4>
                    {new Date().toLocaleDateString()}
                </div>
            </div>
    }

}

export default TimelineCard;