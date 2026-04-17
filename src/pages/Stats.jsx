import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';
import { TimelineContext } from '../Contexts/TimelineProvider';

const Stats = () => {
    const { callFriend, textFriend , videoFriend } = useContext(TimelineContext);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const data = [
        { name: 'Calls', value: callFriend.length },
        { name: 'Texts', value: textFriend.length },
        { name: 'Videos', value: videoFriend.length}
    ];

    if([...callFriend , ...textFriend , ...videoFriend].length === 0){
        return <h2 className='text-5xl flex justify-center p-40'>No Stats to show</h2>
    }

    return (
        
        <div className='bg-[#F8FAFC] py-10'>
            <div className='container mx-auto '>
                <h1 className='text-5xl font-bold mb-8'>Friendship Analytics</h1>
                <div className='flex items-center justify-center bg-white p-6'>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            innerRadius="60%"
                            outerRadius="80%"
                            cornerRadius={5}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend></Legend>
                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default Stats;