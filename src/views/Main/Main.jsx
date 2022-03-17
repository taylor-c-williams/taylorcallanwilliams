import Nav from "../../components/Nav/Nav";
import styles from "./Main.module.css";
import "../../fonts/CodecColdRegular.ttf";

export default function Main() {
	return (
		<main>
      <Nav/>
			<section className={styles.header}>
				Taylor <br />
				Callan <br />
				Williams
			</section>
			<section className={styles.subheader}>
        Software Developer
      </section>
		</main>
	);
}
