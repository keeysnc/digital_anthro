import Layout from "../components/layout/Layout";

import "../styles/globals.css";

//wraps around all your components
function MyApp({ Component, pageProps }) {
	//Component is the page passed into my app
	// If on home page (component === home)

	return (
		//wrapping layout component around all pages
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
