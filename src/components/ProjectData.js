// Data File to hold array of project objects 


import timeCalImg from './images/projectImgs/timeCal.jpg';
import langtonImg from './images/projectImgs/langtonAnt.png';
import hasamiImg  from './images/projectImgs/HasamiShogiGame.png';
import spmImg     from './images/projectImgs/StringPrimMac.png';
import pdfAutoImg from './images/projectImgs/PdfAutomation.png';

const base = import.meta.env.BASE_URL;

const projectData = [
    {
    id: 1,
    title: 'clockTimeCal',
    image: timeCalImg,
    link: 'https://timeworkcal.vercel.app',
    description: 'A calculator that helps hourly employees figure out their exact clock-out time based on start time and required work hours.'
    },
    {
    id: 2,
    title: 'WorkoutTracker',
    image: WorkOutTracker,
    link: `https://easy-workout-tracker.netlify.app/` ,
    description: 'A full-stack MERN fitness tracker with real-time analytics, including total workouts, reps, and max weight. Built a modern, responsive React UI with Material-UI and designed a REST API using Node.js + Express, connected to MongoDB Atlas for cloud data storage. The frontend is deployed on Netlify and the backend on Render'
    }, 
    {
    id: 3,
    title: 'Hasami Shogi Game ',
    image: hasamiImg,
    link: 'https://github.com/alesiram/162-Final-Project-HasamiShogi',
    description: 'OOP game class that enforces Variant-1 rules: 9×9 board with algebraic notation, legal-move validation, multi-side custodian captures, turn/state tracking, and captured-piece counts.'
    }, 
    {
    id: 4,
    title: 'String Primitives and Macros',
    image: spmImg,
    link: 'https://github.com/alesiram/271_String_Primitives_and_Macros',
    description: 'Assembly language program (MASM) that reads numbers as strings, validates input, converts to integers, and displays their sum and average.'
    }, 
    {
    id: 5,
    title: 'Form Automation & Dashboard',
    image: pdfAutoImg,
    link: `${base}PDF_Files/PHQ9_Survey.pdf` ,
    description: 'Built an automated scoring system for the PHQ-9 clinical assessment form using Acrobat JavaScript and SDK scripting. (Open in Adobe Acrobat for full functionality.)'
    }, 
    {
    id: 6,
    title: "Langton's Ant",
    image: langtonImg,
    link: 'https://github.com/alesiram/161-Final-Project-LangtonAnt',
    description: 'A grid-based simulation of Langton’s Ant using OOP, with customizable board size, steps, and ant position.'
    },
    
]

export default projectData;