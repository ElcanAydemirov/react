import React, { useState } from 'react';
import './index.css';

const Filter = ({ data, setData }) => {
    console.log(
        data
    );
    
    const handleFilter = (e) => {
        const searchValue = e.target.value.trim().toLowerCase();
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchValue)
        );

    };


    return (
        <>
            <div className="filter">
                <input
                    type="text"
                    placeholder="Search by title"
                    onInput={handleFilter}
                />
            </div>
        </>
    );
};

export default Filter;
