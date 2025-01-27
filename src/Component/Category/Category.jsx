import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <button className='btn btn-ghost w-[200px] text-start'>{category.category}</button>
        </div>
    );
};

export default Category;