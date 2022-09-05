import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<div className={indexStyles.home__content}>
					<h1>Digital Anthro</h1>
					<h3>An independent creative web design & development studio.</h3>
				</div>
				<br />
			</div>
		</div>
	);
}
