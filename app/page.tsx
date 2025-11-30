import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ResumeSection from '@/components/ResumeSection';
import SkillsCarousel from '@/components/SkillsCarousel';
import styles from './page.module.css';

export default function Home() {
  const latestProjects = projects.slice(0, 4);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          Hey! I&apos;m Maggie.<br />
          I&apos;m a researcher, coder, <br />
          artist, and skateboarder<br />
          based in Trento, Italy.
        </h1>
        <p className={styles.subtitle}>
          I specialize in building digital experiences that are minimal, beautiful, and functional.
        </p>
      </section>

      <section className={styles.latestWorks}>
        <div className={styles.grid}>
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Link href="/portfolio" className={styles.viewAllButton}>
            View All Projects
          </Link>
        </div>
      </section>

      <SkillsCarousel />
      <ResumeSection />
    </main>
  );
}
