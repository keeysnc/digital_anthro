import Link from "next/link";
import Menu from "./Menu";
import Logo from "../logo/Logo";
import navStyles from "./Nav.module.css";

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<Link href="/">
				<div>
					<Logo id={navStyles.logo}></Logo>
				</div>
			</Link>

			<Menu></Menu>
		</nav>
	);
};

export default Nav;
