import React, {useState} from 'react';

export const Toolbar = (props: any) => {

	return (
		<div className="tb-toolbar">
			<button onClick={props.onDuplicate}>duplicate</button>
			<button onClick={props.onDelete}>delete</button>
		</div>
	);
}
