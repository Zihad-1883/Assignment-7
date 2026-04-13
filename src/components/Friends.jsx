import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';

const Friends = () => {

    const [friends , setFriends] = useState([]);
    const [loading , setLoading] = useState(true)

    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            // console.log(data);
            setTimeout( () => {
                setFriends(data);
                setLoading(false);
            }, 500)
            // console.log(friends)
        };
        fetchData()
    })

    // console.log(friends)

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto grid justify-center items-center gap-6 md:grid-cols-2 lg:grid-cols-4'>
                { loading === true ? 
                    <p>Loading</p> :
                    friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)
                }
            </div>
        </div>
    );
};

export default Friends;