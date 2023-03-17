import React, {useState} from 'react';
import {ClassDefault} from "./Layouts/ClassDefault";
import {renderToString} from "react-dom/server";
import {createPortal} from "react-dom";

export const WorkPanel = (props: any) => {

	const template = <ClassDefault />;
	// const html = renderToString(template);
	// console.log(html);
	const workWrapper = document.getElementById("work") as HTMLElement;

	return createPortal(

		<div className="work-panel">
			{template}
		</div>,
		workWrapper
	);
}
