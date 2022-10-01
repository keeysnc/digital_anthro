import Link from "next/link";
import mobileMenuStyles from "../mobileMenu/MobileMenu.module.css";

const MobileMenu = () => {
	return (
		<>
			<div className={mobileMenuStyles.container}>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/work">Work</Link>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://digital-anthro.medium.com/">
							Publications
						</a>
					</li>
					<li>
						<Link href="/events">Events</Link>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.80percentmusic.com/">
							Music
						</a>
					</li>
					<li>
						<Link href="/awards">Awards</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default MobileMenu;
