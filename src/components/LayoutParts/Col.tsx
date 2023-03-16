import React, {useState} from 'react';

export const Col = (props: any) => {

	return (
		<div className="col tb-modifiable">
			{props.children}
		</div>
	);
}
