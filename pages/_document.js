import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap"
					rel="stylesheet"
				></link>

				<Head />
				<body>
					<Main />
					<NextScript />

					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						}}
					></noscript>
					<Main />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
