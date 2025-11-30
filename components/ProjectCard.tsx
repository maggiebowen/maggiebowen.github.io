import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/portfolio/${project.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    quality={90}
                    unoptimized
                />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.category}>{project.categories.join(', ')}</p>
            </div>
        </Link>
    );
}
