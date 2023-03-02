import Head from "next/head";

const about = () => {
	return (
		<div>
			<Head>
				<title>Contact</title>
			</Head>
			<div>
				<h2>Contact</h2>
				<p>
					Send an{" "}
					<span>
						<a href="mailto:nathan@digitalanthro.com" style={{ paddingRight: "0", textDecoration: "underline" }}>
							email
						</a>
					</span>{" "}
					to quote for a project, inquire about a collaboration, or simply say hello.
				</p>
			</div>
		</div>
	);
};

export default about;
