import Link from "next/link";
import navStyles from "./Nav.module.css";

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<div id="logo">
				<h4>Digital Anthro</h4>
				<p>An independent creative studio</p>
			</div>

			<div id="menu">
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/work">Work</Link>
					</li>
					<li>
						<Link href="/events">Events</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
