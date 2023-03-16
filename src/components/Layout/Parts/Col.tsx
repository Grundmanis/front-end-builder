import {ReactNode} from "react";

export const Col = (props: {children: ReactNode, onClick: () => void, className: string}) => {

	return (
		<div onClick={props.onClick} className={"col " + props.className}>
			{props.children}
		</div>
	);
}
