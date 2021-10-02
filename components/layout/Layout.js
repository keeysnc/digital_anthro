import Nav from "../nav/Nav";
import Header from "../header/Header";
import styles from "./Layout.module.css";
import ScrollArrow from "../scrollArrow/ScrollArrow";

// wrapper component
const Layout = ({ children }) => {
	return (
		<>
			<Nav></Nav>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
			<ScrollArrow></ScrollArrow>
		</>
	);
};

export default Layout;
