import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<div className={indexStyles.home__content}>
					<h1>Digital Anthro</h1>
					<p>An independent creative web design & development studio.</p>
				</div>
				<br />
			</div>
		</div>
	);
}
