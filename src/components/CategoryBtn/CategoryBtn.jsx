import { useState } from 'react';
import props from 'prop-types';
import categoriesData from '../../categories.json';
import style from './category.module.css';

function CategoryBtn({ children, selectedCategory, handleCategorySelect }){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);//state for the dropdown list with categorys

    //the category handler updates the category state when the user chooses a category
    const handleCategoryDropDown = (category) => { 
        handleCategorySelect(category);
        setIsDropdownOpen(false);
      };
      //console.log(selectedCategory, 'catbtn');/*DEBUG */
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
    selectedCategory: props.string, 
    handleCategorySelect: props.func,      
  };

export default CategoryBtn