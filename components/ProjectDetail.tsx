// app/components/ProjectDetail.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from './ProjectDetail.module.css';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/portfolio" className={styles.backLink}>
          &larr; Back to Portfolio
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.label}>Client</span>
              <span className={styles.value}>{project.client}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.label}>Duration</span>
              <span className={styles.value}>{project.duration}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.label}>Services</span>
              <span className={styles.value}>
                {project.categories.join(", ")}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.image}
            priority
            sizes="100vw"
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.descriptionTitle}>About the Project</h2>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </main>
  );
}