import React, {cloneElement, useEffect, useRef, useState} from 'react';
import {Toolbar} from "../Toolbar";
import {IElementProps} from "../../interface/IElementProps";
import {Text} from "./Text";
import {useAppDispatch} from "../../app/hooks";
import {setTargetComponent} from "../../features/config/configSlice";
import {store} from "../../app/store";
import {Row} from "../LayoutPartsHtml/Row";

export const LayoutElement = (props: IElementProps) => {

	const dispatch = useAppDispatch();

	console.log("props", props.component);

	const PassedComponent = props.component;

	let index = 1;
	const [components, setComponents] = useState([
		<Text text={"hi" + props.index} index={index} onDuplicate={duplicate} onDelete={deleteComponent}/>,
	]);

	const [isActive, setIsActive] = useState(false)
	const [settings, setSettings] = useState({
		height: "100px"
	})
	const [activeStyle, setActiveStyle] = useState({})
	const [ref, setRef] = useState({})

	function duplicate(element: JSX.Element): void {
		index++;
		const clonedElement = cloneElement(element, {
			index
		});
		setComponents((prevComponents) => {
			return [...prevComponents, ...[clonedElement]]
		})
	}

	function deleteComponent(index: number): void {
		setComponents((current: JSX.Element[]) => {
			return current.filter((component) => component.props.index !== index)
		});
	}

	function duplicateInParent() {
		deActivate();
		props.onDuplicate(<LayoutElement {...props} />)
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
		<Row onClick={onClick} style={{...settings, ...activeStyle}}>
			{components.map((component, index) =>
				<React.Fragment key={index}>{component}</React.Fragment>
			)}
			<Toolbar onDuplicate={duplicateInParent} onDelete={deleteInParent} />
		</Row>
	);
}
