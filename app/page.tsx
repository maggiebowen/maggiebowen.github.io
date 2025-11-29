import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const latestProjects = projects.slice(0, 2);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {/* <h1 className={styles.title}> */}
        <h2>
          Hey! I&apos;m Maggie.<br />
          I&apos;m a researcher, programmer, <br />
          artist, and skateboarder<br />
          based in Trento, Italy.
        </h2>
        {/* </h1> */}
        <p className={styles.subtitle}>
          I specialize in building digital experiences that are minimal, beautiful, and functional.
        </p>
        <Link href="/portfolio" className={styles.cta}>
          View My Work
        </Link>
      </section>

      <section className={styles.latestWorks}>
        <div className={styles.sectionHeader}>
          <h2>My Latest Works</h2>
          <Link href="/portfolio" className={styles.viewAll}>
            View All Projects &rarr;
          </Link>
        </div>
        <div className={styles.grid}>
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
