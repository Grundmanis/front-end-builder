import React, {useState} from 'react';
import {Collapse} from 'react-collapse';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getImages, addImage, removeImage} from "../../features/config/configSlice";

export const ConfigImages = () => {

	const images = useAppSelector(getImages);
	const [isOpen, setIsOpen] = useState(false);
	const [path, setPath] = useState("");
	const [name, setName] = useState("");
	const dispatch = useAppDispatch();

	const onChange = (res: string) => {
		// dispatch(setColor({
		//     type: props.type,
		//     color: res,
		// }))
	}

	const onSave = () => {
		dispatch(addImage({
			path,
			name
		}))
		setPath("");
		setName("");
	}

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>
				Images
			</button>

			<Collapse isOpened={isOpen}>

				<div className="form-group row">
					<label htmlFor="name" className="col-sm-2 col-form-label">Image name</label>
					<div className="col-sm-10">
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Image name"/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="path" className="col-sm-2 col-form-label">Image path</label>
					<div className="col-sm-10">
						<input type="text" value={path} onChange={(e) => setPath(e.target.value)} className="form-control" id="path" placeholder="Path"/>
					</div>
				</div>
				<button onClick={onSave}>
					Save
				</button>
				{images.map(image => (
					<div key={image.name} className="d-inline-block">
						<label>{image.name}</label>
						<img height="20px" src={image.path} />
					</div>
				))}
				<div>
					<button onClick={() => setIsOpen(false)}>
						Done
					</button>
				</div>
			</Collapse>
		</div>
	);
}
