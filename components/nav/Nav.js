import Link from "next/link";
import Menu from "./Menu";
import navStyles from "./Nav.module.css";

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<Link href="/">
				<div id={navStyles.logo}>
					<h4>Digital Anthro</h4>
					<p>An independent user experience studio</p>
				</div>
			</Link>

			<Menu></Menu>
		</nav>
	);
};

export default Nav;
