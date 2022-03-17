import styles from './Title.module.css'

export default function Tile() {
	return (
		<div>
			<section className={styles.header}>
				Taylor <br />
				Callan <br />
				Williams
			</section>
			<section className={styles.subheader}>
				Software Developer
			</section>
			<section className={styles.blurb}>
			Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
			</section>
		</div>
	);
}
