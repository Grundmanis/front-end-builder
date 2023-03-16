import {ReactNode} from "react";

export const Link = (props: {children: ReactNode, onClick: () => void, className: string}) => {

	return (
		<a className={props.className} onClick={props.onClick} href="#">
			{props.children}
		</a>
	);
}
