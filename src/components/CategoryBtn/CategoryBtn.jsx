import { useState } from 'react';
import props from 'prop-types';
import categoriesData from '../../categories.json';
import style from './category.module.css';

function CategoryBtn({ children, handleCategorySelect }){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);//state for the dropdown list with categorys

    //the handler sets the state of the dropdown list
    const handleCategoryDropDown = (category) => { 
        handleCategorySelect(category);
      
        setIsDropdownOpen(false);
      };
     
    return(
        <>
             <button className={style.dropdownBtn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {children}
                
                {isDropdownOpen && (
                    <div className={style.dropdownContent}>
                    {categoriesData.map((category, index) => (
                        <p className={style.drpDwnitems} key={index} onClick={() => handleCategoryDropDown(category)}>{category}</p>
                    ))}
                    </div>
                )}
                </button>
        </>

    );
}
CategoryBtn.propTypes = {
    children: props.array, 
    img: props.element,        
    handleCategorySelect: props.func,  
    handleGetCategoryJoke: props.func,    
  };

export default CategoryBtn