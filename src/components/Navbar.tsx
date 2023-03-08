import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function Navbar(props: any) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({id: props.id});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#!">{props.children}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item"><a className="nav-link" href="#">Home</a></li>
						<li className="nav-item"><a className="nav-link" href="#!">About</a></li>
						<li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
						<li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Blog</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}