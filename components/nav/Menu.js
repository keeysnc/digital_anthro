import Link from "next/link";
import navStyles from "./Nav.module.css";

const Menu = () => {
	return (
		<div className={navStyles.nav__menu}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/work">Work</Link>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://digital-anthro.medium.com/">
						Publications
					</a>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
