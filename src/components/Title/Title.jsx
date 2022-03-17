import styles from './Title.module.css'

export default function Tile() {
	return (
		<div>
			<section className={styles.header}>
				Taylor <br />
				Callan <br />
				Williams
			</section>
			<section className={styles.subheader}>Software Developer</section>
		</div>
	);
}
