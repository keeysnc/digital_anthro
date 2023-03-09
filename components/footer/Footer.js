import footerStyles from "./FooterStyles.module.css";

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className="social-media" style={{ paddingTop: "10px" }}>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/company/digital-anthro"
					style={{ textDecoration: "underline", paddingRight: "10px" }}
				>
					LinkedIn
				</a>
				<a target="_blank" rel="noreferrer" href="https://medium.com/@natekeeys" style={{ textDecoration: "underline", paddingRight: "10px" }}>
					Medium
				</a>
				<a target="_blank" rel="noreferrer" href="https://github.com/keeysnc" style={{ textDecoration: "underline", paddingRight: "0" }}>
					Github
				</a>
			</div>
			<div className={footerStyles.footer__container}>
				<div>
					<p>Nate Keeys - Copyright 2023</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
