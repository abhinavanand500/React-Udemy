import React, { useState, useEffect, useRef } from 'react';

const DropDown = ({ options, selected, onSelectedChanges, label }) => {
    const [open, SetOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }

            SetOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);


    // useEffect(() => {
    //     document.body.addEventListener('click', (event) => {
    //         if (ref.current.contains(event.target)) {
    //             return;
    //         }
    //         SetOpen(false);
    //     })
    // })
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
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={() => SetOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedItems}
                    </div>
                </div>
            </div>

        </div >
    );
}

export default DropDown;