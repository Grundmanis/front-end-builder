import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props: any) {
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
		<div className="draggable-element" ref={setNodeRef} style={style}>
			{props.children}
			<button className="drag-button" style={buttonStyle} {...attributes} {...listeners}>drag me</button>
		</div>
	);
}
