import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function Navbar(props: any) {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" {...props}>
			<div className="container">
				<a className="navbar-brand" href="src/components/Layouts/Bootstrap/Navbar#!">{props.children}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item"><a className="nav-link" href="src/components/Layouts/Bootstrap/Navbar#">Home</a></li>
						<li className="nav-item"><a className="nav-link" href="src/components/Layouts/Bootstrap/Navbar#!">About</a></li>
						<li className="nav-item"><a className="nav-link" href="src/components/Layouts/Bootstrap/Navbar#!">Contact</a></li>
						<li className="nav-item"><a className="nav-link active" aria-current="page" href="src/components/Layouts/Bootstrap/Navbar#">Blog</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
