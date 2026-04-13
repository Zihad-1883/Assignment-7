import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';
import { ClipLoader } from 'react-spinners';

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
                { loading === true ? 
                    <div className='flex justify-center items-center'>
                         <ClipLoader
                            color={{color : "green"}}
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> 
                    </div> :

                    <div className='container mx-auto grid justify-center items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
                    </div>
                }
            </div>
    );
};

export default Friends;