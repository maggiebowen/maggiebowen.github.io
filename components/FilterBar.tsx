import styles from './FilterBar.module.css';

interface FilterBarProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const FILTERS = ['Show All', 'UX/UI', 'Coding', 'Creative'];

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    return (
        <div className={styles.filterBar}>
            {FILTERS.map((filter) => (
                <button
                    key={filter}
                    className={`${styles.button} ${activeFilter === filter ? styles.active : ''}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
