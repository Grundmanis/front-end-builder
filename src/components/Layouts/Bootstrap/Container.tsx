import React, {useState} from 'react';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from "@dnd-kit/utilities";

export const Container = (props: any) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({id: props.id});

	const style = {
		transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
		transition,
	};

	const buttonStyle = {
		top: 0,
	}

	return (
		<div className="col-lg-8 draggable-element" ref={setNodeRef} style={style} {...props}>
			<div className="card mb-4">
				<a href="src/components/Layouts/Bootstrap/Container#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
				<div className="card-body">
					<div className="small text-muted">January 1, 2022</div>
					<h2 className="card-title">Featured Post Title</h2>
					<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
					<a className="btn btn-primary" href="src/components/Layouts/Bootstrap/Container#!">Read more →</a>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<div className="card mb-4">
						<a href="src/components/Layouts/Bootstrap/Container#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
						<div className="card-body">
							<div className="small text-muted">January 1, 2022</div>
							<h2 className="card-title h4">Post Title</h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
							<a className="btn btn-primary" href="src/components/Layouts/Bootstrap/Container#!">Read more →</a>
						</div>
					</div>
					<div className="card mb-4">
						<a href="src/components/Layouts/Bootstrap/Container#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
						<div className="card-body">
							<div className="small text-muted">January 1, 2022</div>
							<h2 className="card-title h4">Post Title</h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
							<a className="btn btn-primary" href="src/components/Layouts/Bootstrap/Container#!">Read more →</a>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="card mb-4">
						<a href="src/components/Layouts/Bootstrap/Container#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
						<div className="card-body">
							<div className="small text-muted">January 1, 2022</div>
							<h2 className="card-title h4">Post Title</h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
							<a className="btn btn-primary" href="src/components/Layouts/Bootstrap/Container#!">Read more →</a>
						</div>
					</div>
					<div className="card mb-4">
						<a href="src/components/Layouts/Bootstrap/Container#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
						<div className="card-body">
							<div className="small text-muted">January 1, 2022</div>
							<h2 className="card-title h4">Post Title</h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
							<a className="btn btn-primary" href="src/components/Layouts/Bootstrap/Container#!">Read more →</a>
						</div>
					</div>
				</div>
			</div>
			<nav aria-label="Pagination">
				<hr className="my-0" />
				<ul className="pagination justify-content-center my-4">
					<li className="page-item disabled"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#" aria-disabled="true">Newer</a></li>
					<li className="page-item active" aria-current="page"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#!">1</a></li>
					<li className="page-item"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#!">2</a></li>
					<li className="page-item"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#!">3</a></li>
					<li className="page-item disabled"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#!">...</a></li>
					<li className="page-item"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#!">15</a></li>
					<li className="page-item"><a className="page-link" href="src/components/Layouts/Bootstrap/Container#!">Older</a></li>
				</ul>
			</nav>
			<button className="drag-button" style={buttonStyle} {...attributes} {...listeners}>drag me</button>
		</div>
	);
}
