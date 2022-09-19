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
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/work">Work</Link>
				</li>
				<li>
					<Link href="https://medium.com/@natekeeys">Publications</Link>
				</li>
				<li>
					<Link href="/events">Events</Link>
				</li>
				<li>
					<Link href="/exhibits">Projects</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
