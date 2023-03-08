import React, {useState} from 'react';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {SortableItem} from "./SortableItem";
import {Search} from "./Search";
import {Categories} from "./Categories";
import {SideWidget} from "./SideWidget";import {
	restrictToParentElement,
	restrictToVerticalAxis,
	restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {CSS} from "@dnd-kit/utilities";

export const Sidebar = (props: any) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({id: props.id});

	const style = {
		transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
		transition,
	};


	const [items, setItems] = useState([0, 1, 2, 3]);
	const itemComponents = [
		<div></div>,
		<Search/>,
		<Categories/>,
		<SideWidget/>,
	];
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

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

	const buttonStyle = {
		top: 0,
	}

	return (

		<div className="col-lg-4 draggable-element" ref={setNodeRef} style={style} {...props}>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
				modifiers={[restrictToVerticalAxis, restrictToParentElement]}
			>
				<SortableContext
					items={items}
					strategy={verticalListSortingStrategy}
				>
					{items.map(id =>
						<SortableItem key={id} id={id}>{itemComponents[id]}</SortableItem>)}
				</SortableContext>
			</DndContext>
			<button className="drag-button" style={buttonStyle} {...attributes} {...listeners}>drag me</button>
		</div>
	);
}
