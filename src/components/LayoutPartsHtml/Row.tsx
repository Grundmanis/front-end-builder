import React, {cloneElement, ReactNode, useEffect, useRef, useState} from 'react';

export const Row = (props: { onClick?: () => void, style?: object, children?: ReactNode }) => {

	return (
		<div onClick={props.onClick} className="row tb-modifiable" style={props.style}>
			{props.children}
		</div>
);
}
