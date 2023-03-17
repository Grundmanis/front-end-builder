import React, {cloneElement, useEffect, useRef, useState} from 'react';
import {Toolbar} from "../Toolbar";
import {IElementProps} from "../../interface/IElementProps";
import {useAppDispatch} from "../../app/hooks";
import {setTargetComponent} from "../../features/config/configSlice";
import {store} from "../../app/store";

export const Row = (props: IElementProps) => {

	const dispatch = useAppDispatch();
	// const wrapperRef = useRef(null);

	let index = 1;
	const [components, setComponents] = useState([
		// <Text text={"hi" + props.index} index={index} onDuplicate={duplicate} onDelete={deleteComponent}/>,
	]);

	const [isActive, setIsActive] = useState(false)
	const [settings, setSettings] = useState({
		height: "100px"
	})
	const [activeStyle, setActiveStyle] = useState({})
	const [ref, setRef] = useState({})

	// useEffect(() => {
	// 	function handleClickOutside(event: any) {
	// 		// @ts-ignore
	// 		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
	// 			console.log("click outside");
	// 			deActivate();
	// 		}
	// 	}
	// 	// Bind the event listener
	// 	document.addEventListener("mousedown", handleClickOutside);
	// 	return () => {
	// 		// Unbind the event listener on clean up
	// 		document.removeEventListener("mousedown", handleClickOutside);
	// 	};
	// });
	//
	// function duplicate(element: JSX.Element): void {
	// 	index++;
	// 	const clonedElement = cloneElement(element, {
	// 		index
	// 	});
	// 	setComponents((prevComponents) => {
	// 		return [...prevComponents, ...[clonedElement]]
	// 	})
	// }
	//
	// function deleteComponent(index: number): void {
	// 	setComponents((current: JSX.Element[]) => {
	// 		return current.filter((component) => component.props.index !== index)
	// 	});
	// }

	function duplicateInParent() {
		deActivate();
		props.onDuplicate(<Row {...props} />)
	}

	function deleteInParent() {
		deActivate();
		// @ts-ignore
		props.onDelete(props.index)
	}

	function onClick() {
		if (isActive) {
			deActivate();
		} else {
			setActiveStyle({"border": "1px solid red"});
			// @ts-ignore
			const unsub = store.subscribe(subscribeToSettingsChanges);
			setRef({unsub});
			dispatch(setTargetComponent(settings));
		}
		setIsActive(!isActive);
	}

	function deActivate() {
		if (Object.keys(ref).length > 0) {
			// @ts-ignore
			ref.unsub();
		}
		dispatch(setTargetComponent({}));
		setActiveStyle({});
	}

	function subscribeToSettingsChanges() {

		const settings = store.getState().config.targetComponent;
		console.log("Received subscribe in", props.index)
		if (Object.keys(settings).length) {
			// @ts-ignore
			setSettings(settings)
		}
	}

	return (
		// <div ref={wrapperRef} onClick={onClick} className="row tb-modifiable" style={{...settings, ...activeStyle}}>
		<div onClick={onClick} className="row tb-modifiable" style={{...settings, ...activeStyle}}>
			{components.map((component, index) =>
				<React.Fragment key={index}>{component}</React.Fragment>
			)}
			<Toolbar onDuplicate={duplicateInParent} onDelete={deleteInParent} />
		</div>
	);
}
