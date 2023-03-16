import React from 'react';
import {IElementProps} from "../../interface/IElementProps";

export const Text = (props: IElementProps) => {

	return (
		<p className="">
			{props.text}
		</p>
	);
}
