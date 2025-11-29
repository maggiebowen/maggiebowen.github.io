import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Maggie Bowen
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                    <Link href="/portfolio" className={styles.link}>
                        Portfolio
                    </Link>
                    <Link href="/contact" className={styles.link}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
