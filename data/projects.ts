export interface Project {
    id: string;
    title: string;
    categories: ('UX/UI' | 'Coding' | 'Creative')[];
    image: string;
    client: string;
    duration: string;
    description: string;
}

export const projects: Project[] = [
    {
        id: 'equiluna',
        title: 'Equiluna',
        categories: ['Coding', 'UX/UI'],
        image: '/images/project1.png',
        client: 'Personal Project',
        duration: '2023 - Present',
        description: 'A coding and UX/UI project focused on balance and harmony.',
    },
    {
        id: 'PAMA',
        title: 'Maintenance App',
        categories: ['UX/UI'],
        image: '/images/project2.png',
        client: 'Industrial Client',
        duration: '2023',
        description: 'A mobile application designed for tracking machine maintenance schedules.',
    },
    {
        id: 'CSEF',
        title: 'Task Manager',
        categories: ['UX/UI'],
        image: '/images/project3.jpg',
        client: 'Startup',
        duration: '2024',
        description: 'A clean and efficient task management interface for remote teams.',
    },
    {
        id: 'photography',
        title: 'Skate Culture',
        categories: ['Creative'],
        image: '/images/project4.jpg',
        client: 'Magazine',
        duration: '2022',
        description: 'A creative photography series exploring modern skateboard culture.',
    },
    {
        id: 'art',
        title: 'Mountain Roads',
        categories: ['Creative'],
        image: '/images/project5.jpg',
        client: 'Travel Blog',
        duration: '2021',
        description: 'A visual journey through winding mountain roads and scenic landscapes.',
    },
];
