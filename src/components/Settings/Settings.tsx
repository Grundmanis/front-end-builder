import React, { useState } from 'react';

export const Settings = () =>{

    return (
        <div className="border">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="name-input">Template Name</span>
                </div>
                <input type="text" className="form-control" placeholder="Enter the name" aria-label="name" aria-describedby="name-input" />
            </div>
        </div>
    );
}
