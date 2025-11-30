import styles from './ResumeSection.module.css';

export default function ResumeSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h2 className={styles.header}>Education</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <span className={styles.date}>2019 - 2020</span>
                            <h3 className={styles.title}>Master in Computer Science</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.date}>2015 - 2019</span>
                            <h3 className={styles.title}>Bachelor in Computer Science</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.date}>2019 - 2020</span>
                            <h3 className={styles.title}>Certificate in UI & UX Design</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <h2 className={styles.header}>Experience</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <span className={styles.date}>2021 - 2024</span>
                            <h3 className={styles.title}>Chief Operating Officer @flatheme</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.date}>2019 - 2021</span>
                            <h3 className={styles.title}>UI & UX Designer @flatheme</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.date}>2018 - 2019</span>
                            <h3 className={styles.title}>Creative Director @flatheme</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
