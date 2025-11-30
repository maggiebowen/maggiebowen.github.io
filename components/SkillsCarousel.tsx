import styles from './SkillsCarousel.module.css';

const skills = [
    'Python', 'Matlab', 'EEG', 'Eye-tracking', 'Figma', 'Adobe Suite', 'Italian', 'Spanish', 'French',
    'React', 'HTML/CSS', 'Arduino C', 'C++', 'Java', 'JavaScript', 'SQL',
    'PHP', 'Swift', 'Machine Learning'
];

export default function SkillsCarousel() {
    return (
        <section className={styles.section}>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {/* Double the skills to create seamless loop */}
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className={styles.slide}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
