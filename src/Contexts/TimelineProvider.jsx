import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const TimelineContext = createContext()


const TimelineProvider = ({children}) => {


     const [callFriend , setCallFriend] = useState([])
    
        const handleCall = (currentFriend) => {
            // console.log(currentFriend);
            toast.success(`Called to ${currentFriend.name}`);  
            setCallFriend([...callFriend , currentFriend]);
        }

     const [textFriend , setTextFriend] = useState([])
    
        const handleText = (currentFriend) => {
            // console.log(currentFriend);
            toast.success(`Texted to ${currentFriend.name}`);  
            setTextFriend([...textFriend , currentFriend])
        }

    const data = { handleCall , callFriend , setCallFriend , handleText , textFriend , setTextFriend }

    return <TimelineContext.Provider value={data}>
        {children}
    </TimelineContext.Provider>
};

export default TimelineProvider;