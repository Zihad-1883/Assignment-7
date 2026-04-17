import React, { useContext } from 'react';
import { TimelineContext } from '../Contexts/TimelineProvider';
import TimelineCard from '../components/TimelineCard';




const Timeline = () => {

    const {callFriend , textFriend , videoFriend} = useContext(TimelineContext);
    // console.log(textFriend)
    const allClickedFriends = [...callFriend , ...textFriend , ...videoFriend];
    // console.log(allClickedFriends)

    if(allClickedFriends.length === 0){
        return <h2 className='text-5xl flex justify-center p-40'>No Timeline to show</h2>
    }

    return (
        <div className='p-20 bg-[#F8FAFC]'>
            <div className='container mx-auto'>
            <h1 className='text-5xl font-bold mb-6'>Timeline</h1>
            {
                allClickedFriends.map((friend , ind) => <TimelineCard key={ind} friend={friend}></TimelineCard>)
            }
            </div>
        </div>
    );
};

export default Timeline;