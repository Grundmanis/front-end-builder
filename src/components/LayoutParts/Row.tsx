import React, {useState} from 'react';
import {Toolbar} from "../Toolbar";
import {Col} from "./Col";
import {IElementProps} from "../../interface/IElementProps";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

export const Row = (props: IElementProps) => {

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({id: props.index});

	const style = {
		transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
		transition,
	};

	function duplicateChild() {
		console.log("duplicate col");
	}

	const components = [
		<Col onDuplicate={duplicateChild}>hi{props.index}</Col>
	];

	function duplicateInParent() {
		props.onDuplicate(<Row {...props} />)
	}

	function deleteInParent() {
		props.onDelete(props.index)
	}

	return (
		<div className="row tb-modifiable" ref={setNodeRef} style={style}>
			{components}
			<Toolbar dragging={{attributes, listeners}} onDuplicate={duplicateInParent} onDelete={deleteInParent} />
		</div>
	);
}
