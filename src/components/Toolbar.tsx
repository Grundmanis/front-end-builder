import React, {useState} from 'react';

export const Toolbar = (props: any) => {

	return (
		<span className="tb-toolbar">
			<button onClick={props.onDuplicate}>duplicate</button>
			<button onClick={props.onDelete}>delete</button>
		</span>
	);
}
