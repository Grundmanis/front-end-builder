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
	sortableKeyboardCoordinates, verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {SortableItem} from "./SortableItem";
import {Search} from "./Search";
import {Categories} from "./Categories";
import {SideWidget} from "./SideWidget";import {
	restrictToParentElement,
	restrictToVerticalAxis,
	restrictToWindowEdges,
} from '@dnd-kit/modifiers';

export const Sidebar = (props: any) => {

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

	return (

		<div className="col-lg-4">
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
		</div>
	);
}
