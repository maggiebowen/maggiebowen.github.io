'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import styles from './page.module.css';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('Show All');

    const filteredProjects = projects.filter((project) => {
        if (activeFilter === 'Show All') return true;
        return project.categories.includes(activeFilter as any);
    });

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>My Latest Works</h1>
            </div>

            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <div className={styles.grid}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
}
