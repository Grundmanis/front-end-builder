import React, { useState } from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getTargetComponent, updateTargetComponent} from "../../features/config/configSlice";

export const Settings = () =>{

    const dispatch = useAppDispatch();
    let targetComponent = useAppSelector(getTargetComponent);

    function onChange(e: any, option: string) {
        dispatch(updateTargetComponent({
            key: option,
            value: e.target.value
        }));
    }

    const rows = [];
    for (const option in targetComponent) {
        rows.push(<div key={option} className="border">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="name-input">{option}</span>
                </div>
                <input onChange={(e) => onChange(e, option)} type="text" value={targetComponent[option]} className="form-control" placeholder="Enter the name" aria-label="name" aria-describedby="name-input" />
            </div>
        </div>)
    }

    return (
        <React.Fragment>{rows}</React.Fragment>
    )
}
