import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Naru Portfolio Replica. All rights reserved.</p>
                <div className={styles.socials}>
                    <span>Instagram</span>
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                </div>
            </div>
        </footer>
    );
}
