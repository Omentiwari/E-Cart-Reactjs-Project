import React, { useState } from 'react';
import './index.css'; // Ensure this path is correct for your CSS file

const FilterOptions = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        // You can add logic here to handle the filter application
    };

    return (
        <div className="nav-bar-wrapper">
            <div className="filter-options">
                {['No Filter', 'Mobiles', 'Laptops', 'Tablets'].map((filter) => (
                    <div
                        key={filter}
                        className={`items ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => handleFilterClick(filter)}
                    >
                        {filter}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterOptions;
