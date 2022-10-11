import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Script from "next/script";

import styles from "./Layout.module.css";

// wrapper component
const Layout = ({ children }) => {
	return (
		<>
			<div className={styles.layout__container}>
				<Head>
					<title>Digital Anthro, LLC - Creative Technologist Consultant</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<meta
						name="keywords"
						content="Creative Technologist DC, UI/UX Design Consultant DC, Fullstack Web Developer DC, Gaithersburg Web Development Consultant"
					></meta>
					{/* OG Tags */}
					<meta
						name="description"
						content="Creative technologist consultant specialized in human-centered design and development for web experiences and applications."
					/>
					<meta property="og:image" content="noise-shift.jpg" />

					<meta property="og:title" content="Creative Technologist Consultant" />

					<meta property="og:description" content="A full description of the page." />

					<meta property="og:image:width" content="1200" />

					<meta property="og:image:height" content="630" />
					{/*}
					<meta property="og:title" content={pageTitle} key="ogtitle" />
					<meta property="og:description" content={description} key="ogdesc" /> */}
					{/* Twitter */}
					{/* <meta name="twitter:card" content="summary" key="twcard" />
					<meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

					{/* Open Graph */}
					{/* <meta property="og:url" content={currentURL} key="ogurl" />
					<meta property="og:image" content={previewImage} key="ogimage" />
					<meta property="og:site_name" content={siteName} key="ogsitename" />
					<meta property="og:title" content={pageTitle} key="ogtitle" />
					<meta property="og:description" content={description} key="ogdesc" /> */}
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
						crossOrigin="anonymous"
					></link>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-M2GKB4N');`,
						}}
					></script>
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
