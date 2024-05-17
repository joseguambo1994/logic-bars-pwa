import { useState } from "react";

const users: User[] = [
    {
        id: '1',
        rank: 1,
        name: 'John Doe',
        profileImage: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        rank: 2,
        name: 'James Smith',
        profileImage: 'https://media.tenor.com/9A-P3nhxfzYAAAAM/china-china-calisthenics.gif',
    },
    {
        id: '3',
        rank: 3,
        name: 'Robert Johnson',
        profileImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vivobarefoot.com%2Frw%2Fcalisthenics-fundamentals-course&psig=AOvVaw31E14WWGRef7u6VRG6gClJ&ust=1715406507078000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjIlLexgoYDFQAAAAAdAAAAABAE',
    },
    {
        id: '4',
        rank: 4,
        name: 'Michael Williams',
        profileImage: 'https://via.placeholder.com/153',
    },
    {
        id: '5',
        rank: 5,
        name: 'David Brown',
        profileImage: 'https://via.placeholder.com/154',
    },
    {
        id: '6',
        rank: 6,
        name: 'Richard Davis',
        profileImage: 'https://via.placeholder.com/155',
    },
    {
        id: '7',
        rank: 7,
        name: 'Thomas Wilson',
        profileImage: 'https://via.placeholder.com/156',
    },
    {
        id: '8',
        rank: 8,
        name: 'Charles Moore',
        profileImage: 'https://via.placeholder.com/157',
    },
    {
        id: '9',
        rank: 9,
        name: 'Joseph Taylor',
        profileImage: 'https://via.placeholder.com/158',
    },
    {
        id: '10',
        rank: 10,
        name: 'William Jackson',
        profileImage: 'https://via.placeholder.com/150',
    },
    {
        id: '11',
        rank: 11,
        name: 'Henry Thompson',
        profileImage: 'https://via.placeholder.com/150',
    },
    {
        id: '12',
        rank: 12,
        name: 'George White',
        profileImage: 'https://via.placeholder.com/150',
    },
];

interface User {
    id: string;
    rank: number;
    name: string;
    profileImage: string;
}
const Ranks = () => {
    const [selected, setSelected] = useState<string>();
    const handlePress = (id: string) => {
        setSelected(id);
    };
    return <div>
        {
            users.map((user, index) => {
                return <div  key={index} className={`collapse collapse-arrow bg-base-200 ${user.id === selected ? 'bg-primary' : ''}`}>
                    <input type="radio" name="my-accordion-2" onClick={() => handlePress(user.id)} />
                    <div className="collapse-title text-xl font-medium">
                        <span className={`badge ${user.id === selected ? 'badge-accent' : 'badge-primary'}`}>{user.rank}</span>
                        <span className="pl-4">{user.name}</span>
                    </div>
                    <div className="collapse-content">
                        <img src={user.profileImage} alt={user.name} />
                    </div>
                </div>;
            })
        }
    </div>;
}
export default Ranks;