import { useEffect, useState } from "react";
import Chart from "~/components/Chart";

type Level = 'beginner' | 'intermediate' | 'advanced';
type Category = 'statics' | 'dynamics';
type Skill = {
    id: string;
    name: string;
    level: Level;
    points: number;
    category: Category;
};
const skills: Skill[] = [
    {
        id: '1',
        name: 'Swing 360',
        level: 'intermediate',
        points: 1.5,
        category: 'dynamics',
    },
    {
        id: '2',
        name: 'Geinger',
        level: 'intermediate',
        points: 2,
        category: 'dynamics',
    },
    {
        id: '3',
        name: 'Swing 540',
        level: 'intermediate',
        points: 2.5,
        category: 'dynamics',
    },
    {
        id: '4',
        name: 'Swing 180',
        level: 'beginner',
        points: 0.5,
        category: 'dynamics',
    },
    {
        id: '5',
        name: 'Bar spin',
        level: 'intermediate',
        points: 0.5,
        category: 'dynamics',
    },
    {
        id: '6',
        name: 'Swing Muscle Up',
        level: 'beginner',
        points: 0.5,
        category: 'dynamics',
    },
    {
        id: '7',
        name: 'Swing 720',
        level: 'advanced',
        points: 7,
        category: 'dynamics',
    },
    {
        id: '8',
        name: 'Front Lever',
        level: 'advanced',
        points: 5,
        category: 'statics',
    },
    {
        id: '9',
        name: 'Full Planche',
        level: 'advanced',
        points: 7,
        category: 'statics',
    },
    {
        id: '10',
        name: 'Back Lever',
        level: 'beginner',
        points: 1.5,
        category: 'statics',
    },
    {
        id: '11',
        name: 'handstand',
        level: 'beginner',
        points: 1,
        category: 'statics',
    },
];

const combos = [
    {
        id: '1',
        name: 'Swing 360 > Geinger',
        skills: ['1', '2'],
        complexity: 1,
    },
    {
        id: '2',
        name: 'Double swing 360 > Geinger',
        skills: ['1', '1', '2'],
        complexity: 2,
    },
    {
        id: '3',
        name: 'Swing 720 > Geinger > Swing 540',
        skills: ['7', '2', '3'],
        complexity: 4,
    },
    {
        id: '4',
        name: 'Front Lever > Back Lever > Swing 360 > Geinger',
        skills: ['8', '10', '1', '2'],
        complexity: 2,
    },

]


const athletes = [
    {
        id: '1',
        skills: ['1', '2', '3'],
        combos: ['1', '2'],
    },
    {
        id: '2',
        skills: ['4', '5', '6'],
        combos: ['2', '3'],
    },
    {
        id: '3',
        skills: ['7', '8', '9'],
        combos: ['3', '1'],
    },
    {
        id: '4',
        skills: ['10', '1', '2'],
        combos: ['2'],
    },
    {
        id: '5',
        skills: ['3'],
        combos: ['2'],
    },
    {
        id: '6',
        skills: ['1', '4'],
        combos: ['1', '2'],
    },
    {
        id: '7',
        skills: ['2', '1', '4'],
        combos: ['1', '2'],
    },
    {
        id: '8',
        skills: ['2', '3', '4'],
        combos: ['3', '2'],
    },
    {
        id: '9',
        skills: ['5', '6', '7'],
        combos: ['1', '3'],
    },
    {
        id: '10',
        skills: ['8', '9', '10'],
        combos: ['1', '4'],

    },
]


const getRandomScore = () => Math.floor(Math.random() * 10) + 1;


export default function Statistics() {
    const [data, setData] = useState([]);
    const randomIndex = Math.floor(Math.random() * athletes.length);
    const randomAthlete = athletes[randomIndex];
    const userSkills = randomAthlete.skills;
    const userCombos = randomAthlete.combos;

    useEffect(() => {
        const score =  [
            {
                "category": "Statics",
                "score": getRandomScore(),
            },
            {
                "category": "Dynamics",
                "score": getRandomScore(),
            },
            {
                "category": "Combos",
                "score": getRandomScore(),
            },
            {
                "category": "Strenght",
                "score": getRandomScore(),
            },
            {
                "category": "Endurance",
                "score": getRandomScore(),
            },
        ];
        setData(score);
    }, []);
    return <div>
        <h1>Statistics Screen</h1>

        <Chart data={data} />

        {
            userSkills.map((skillId) => {
                const skill = skills?.find((s) => s.id === skillId);
                if (skill) {
                    return <div key={skill.id}>
                        <h2>{skill.name}</h2>
                        <p>Level: {skill.level}</p>
                        <p>Points: {skill.points}</p>
                        <p>Category: {skill.category}</p>
                    </div>;
                };
            })
        }
    </div>;
}