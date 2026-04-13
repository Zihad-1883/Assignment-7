import React from 'react';

const FriendsCard = ({friend}) => {
    // console.log(friend);
    
    const statusColor = () => {
        if(friend.status == 'overdue'){
            return "bg-[#EF4444] px-3 py-1 rounded-full text-white"
        }
        else if(friend.status == 'almost due'){
            return "bg-[#EFAD44] px-3 py-1 rounded-full text-white"
        }
        else{
            return "bg-[#244D3F] px-3 py-1 rounded-full text-white"
        }
    }

    return (
        <div className='bg-white flex flex-col justify-center items-center p-6 rounded-md shadow-sm space-y-3'>
            <img className='rounded-full' src={friend.picture} alt="" />
            <h1>{friend.name}</h1>
            <p>{friend.days_since_contact}d Ago</p>
            <div className='flex justify-center items-center gap-1'>
                <span className='bg-[#CBFADB] px-3 py-1 rounded-full'>{friend.tags[0]}</span>
                <span className={`${friend.tags[1] ? "bg-[#CBFADB] px-2 py-1 rounded-full" : ""}`}>{friend.tags[1]}</span>
            </div>
            <span className={statusColor()}>{friend.status}</span>
        </div>
    );
};

export default FriendsCard;