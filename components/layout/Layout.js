import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Script from "next/script";
// import Pagination from "../pagination/Pagination";
// import ScrollArrow from "../scrollArrow/ScrollArrow";

import styles from "./Layout.module.css";

// wrapper component
const Layout = ({ children }) => {
	return (
		<>
			<div className={styles.layout__container}>
				<Head>
					<title>Digital Anthro - An Independent Creative Studio based in Washington DC</title>
					<meta
						name="keywords"
						content="Web development, Web Design, UX Design, UI Design, User Experience, Washington DC, Front-end web development"
					></meta>
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
						crossOrigin="anonymous"
					></link>
				</Head>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
					crossOrigin="anonymous"
				></Script>
				<Nav></Nav>
				{/* <Pagination></Pagination> */}
				<div>
					<main className={styles.main}>{children}</main>
				</div>
				{/* <ScrollArrow></ScrollArrow> */}
				<Footer></Footer>
			</div>
		</>
	);
};

export default Layout;
