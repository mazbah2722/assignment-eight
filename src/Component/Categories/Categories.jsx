import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('./category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        
        <div>
            
            <div>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;