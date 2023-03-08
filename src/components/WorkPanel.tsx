import React, {useState} from 'react';
import {useAppSelector} from "../app/hooks";
import {getColor} from "../features/config/configSlice";
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove, horizontalListSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {Navbar} from "./Navbar";
import {Header} from "./Header";
import {SortableItem} from "./SortableItem";
import {Sidebar} from "./Sidebar";
import {Container} from "./Container";
import {restrictToHorizontalAxis, restrictToParentElement, restrictToVerticalAxis} from "@dnd-kit/modifiers";

var html2json = require('html2json').html2json;
var json2html = require('html2json').json2html;


export const WorkPanel = (props: any) => {

	const [items, setItems] = useState([0, 1, 2]);
	const [mainItems, setMainItems] = useState([0, 1, 2]);
	const itemComponents = [
		<div></div>,
		<Navbar>Test1</Navbar>,
		<Header/>,
	];
	const mainItemComponents = [
		<div></div>,
		<Container/>,
		<Sidebar/>,
	];
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const configColor = useAppSelector(getColor);

	const html = {
		body: {}
	}

	function handleDragEnd(event: any) {
		const {active, over} = event;

		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active.id);
				const newIndex = items.indexOf(over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

	function handleDragEnd2(event: any) {
		const {active, over} = event;

		if (active.id !== over.id) {
			setMainItems((items) => {
				const oldIndex = mainItems.indexOf(active.id);
				const newIndex = mainItems.indexOf(over.id);

				return arrayMove(mainItems, oldIndex, newIndex);
			});
		}
	}

	function renderComponent(component: any, props: any) {
		return React.cloneElement(component, {
			id: props.id,
			key: props.id,
		})
	}

	return (

		<div className="work-panel">

			{/*<p>Please, choose main color:</p>*/}
			{/*<div style={{width: "100px", height: "100px", backgroundColor: configColor.primaryColor}}></div>*/}
			{/*<p>Please, choose second color:</p>*/}
			{/*<div style={{width: "100px", height: "100px", backgroundColor: configColor.secondaryColor}}></div>*/}
			{/*<p>Please, choose third color:</p>*/}
			{/*<div style={{width: "100px", height: "100px", backgroundColor: configColor.tertiaryColor}}></div>*/}
			{/*<p>Please, choose tint color:</p>*/}
			{/*<div style={{width: "100px", height: "100px", backgroundColor: configColor.tintColor}}></div>*/}
			{/*<p>Please, choose shade color:</p>*/}
			{/*<div style={{width: "100px", height: "100px", backgroundColor: configColor.shadeColor}}></div>*/}
			{/*<p>Please, choose tone color:</p>*/}
			{/*<div style={{width: "100px", height: "100px", backgroundColor: configColor.toneColor}}></div>*/}


			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
				modifiers={[restrictToVerticalAxis]}
			>
				<SortableContext
					items={items}
					strategy={verticalListSortingStrategy}
				>
					{items.map(id =>
						<SortableItem key={id} id={id}>{itemComponents[id]}</SortableItem>)}
				</SortableContext>
			</DndContext>
			<div className="container">
				<div className="row">
					<DndContext
						sensors={sensors}
						collisionDetection={closestCenter}
						onDragEnd={handleDragEnd2}
						modifiers={[restrictToHorizontalAxis]}
					>
						<SortableContext
							items={mainItems}
							strategy={horizontalListSortingStrategy}
						>

							{mainItems.map(id => renderComponent(mainItemComponents[id], {id}))}
						</SortableContext>
					</DndContext>
				</div>
			</div>
			<footer className="py-5 bg-dark">
				<div className="container">
					<p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
				</div>
			</footer>
		</div>
	);
}
