import React, {useState} from 'react';

export const Toolbar = (props: any) => {

	return (
		<div className="tb-toolbar">
			<button {...props.dragging.attributes} {...props.dragging.listeners}>drag</button>
			<button onClick={props.onDuplicate}>duplicate</button>
			<button onClick={props.onDelete}>delete</button>
		</div>
	);
}
