import React, { useState } from 'react';

const DropDown = ({ options, selected, onSelectedChanges }) => {
    const [open, SetOpen] = useState(false);
    const renderedItems = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className='item'
                onClick={() => { onSelectedChanges(option) }}
            >
                {option.label}
            </div>
        )
    })
    return (
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Select a color</label>
                <div onClick={() => SetOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedItems}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;