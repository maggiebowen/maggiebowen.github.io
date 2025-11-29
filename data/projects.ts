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
        id: 'project-1',
        title: 'Equiluna',
        categories: ['Coding', 'UX/UI'],
        image: '/images/project1.png',
        client: 'Personal Project',
        duration: '2023 - Present',
        description: 'A coding and UX/UI project focused on balance and harmony.',
    },
    {
        id: 'project-2',
        title: 'Maintenance App',
        categories: ['UX/UI'],
        image: '/images/project2.png',
        client: 'Industrial Client',
        duration: '2023',
        description: 'A mobile application designed for tracking machine maintenance schedules.',
    },
    {
        id: 'project-3',
        title: 'Task Manager',
        categories: ['UX/UI'],
        image: '/images/project3.jpg',
        client: 'Startup',
        duration: '2024',
        description: 'A clean and efficient task management interface for remote teams.',
    },
    {
        id: 'project-4',
        title: 'Skate Culture',
        categories: ['Creative'],
        image: '/images/project4.jpg',
        client: 'Magazine',
        duration: '2022',
        description: 'A creative photography series exploring modern skateboard culture.',
    },
    {
        id: 'project-5',
        title: 'Mountain Roads',
        categories: ['Creative'],
        image: '/images/project5.jpg',
        client: 'Travel Blog',
        duration: '2021',
        description: 'A visual journey through winding mountain roads and scenic landscapes.',
    },
];
