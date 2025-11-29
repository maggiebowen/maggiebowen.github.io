import styles from './page.module.css';

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Let&apos;s Work Together</h1>
                <p className={styles.subtitle}>
                    Have a project in mind? I&apos;d love to hear about it.
                </p>

                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input type="text" id="name" className={styles.input} placeholder="Your Name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" className={styles.input} placeholder="your@email.com" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea id="message" className={styles.textarea} rows={5} placeholder="Tell me about your project"></textarea>
                    </div>
                    <button type="submit" className={styles.button}>Send Message</button>
                </form>
            </div>
        </main>
    );
}
