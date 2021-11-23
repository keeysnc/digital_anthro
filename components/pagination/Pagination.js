import Router from "next/router";
import { useEffect } from "react";
import Menu from "../nav/Menu";
import paginationStyles from "./Pagination.module.css";

// wrapper component
const Pagination = () => {
	const getMenuItems = Menu().props.children.props.children;
	const menuItems = getMenuItems.map((items, i) => (
		<li key={i} id={key} className="pagination__dot">
			{items}
		</li>
	));

	return (
		<>
			<div className={paginationStyles.pagination}>
				<ul>
					{/* Map over how many pages to render pagination points */}
					{menuItems}
				</ul>
			</div>
		</>
	);
};

export default Pagination;
