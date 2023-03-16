import React, {useState} from 'react';
import {ClassDefault} from "./Layouts/ClassDefault";

export const WorkPanel = (props: any) => {

	const template = <ClassDefault />;

	return (

		<div className="work-panel">
			{template}
		</div>
	);
}
