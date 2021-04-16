import { useState } from "react"
import special from '../../assets/images/something-special.png';
import dungeon from '../../assets/images/dungeonsend.png';
import notes from '../../assets/images/note-taker.png';
import work from '../../assets/images/work-day-scheduler.png';
import food from '../../assets/images/food-baby.png';
import budget from '../../assets/images/budget-tracker.png';
import Project from '../Project/index.js';

function Portfolio() {

    const [projects] = useState([
        {
            name: "Food Baby",
            description: "Group three Project, restaurant template with notifications and an owner dashboard.",
            photo:food,
            url: "https://food-babycmnw.herokuapp.com/",
            github: "https://github.com/Nickhill2380/food-baby"
        },
        {
            name: 'Something Special',
            description: 'Group two Project, Online Community for selling, renting and buying used event items',
            photo: special,
            url: "https://something-special2380.herokuapp.com/login",
            github: "https://github.com/Nickhill2380/something-special"
        },
        {
            name: "Dungeon's End",
            description: 'Group one Project, DnD inspired turn based combat game',
            photo: dungeon,
            url: "https://nickhill2380.github.io/dungeons-end/",
            github: "https://github.com/Nickhill2380/dungeons-end"
        },
        {
            name: "Note Taker",
            description: "Application that allows users to make notes that can be viewed later and deleted",
            photo: notes,
            url: "https://note-taker-2380.herokuapp.com/notes",
            github: "https://github.com/Nickhill2380/note-taker"
        },
        {
            name: "Work Day Scheduler",
            description: "A daily planner that stores task and keeps track of the time to let you know if tasks are late.",
            photo: work,
            url: "https://nickhill2380.github.io/work-day-scheduler/",
            github: "https://github.com/Nickhill2380/work-day-scheduler"
        },
        {
            name: "Budget Tracker",
            description: "Allows user to track their budget online and offline",
            photo: budget,
            url: "https://budget-tracker2380.herokuapp.com/",
            github: "https://github.com/Nickhill2380/budget-tracker"
        }   
    ])

    return (
        <div className="project-container">
            {projects.map((image) => (
                <Project 
                    image ={image}
                />
             ))}
            
        </div>
    )
}

export default Portfolio