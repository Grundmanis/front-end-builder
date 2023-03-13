import React, {useState} from 'react';
import {Default} from "./Layouts/Default";
import { renderToString } from 'react-dom/server';

export const WorkPanel = (props: any) => {

	const template = <Default />;
	// const html = renderToString(template);
	// console.log({html});

	return (

		<div className="work-panel">
			{template}
		</div>
	);
}
