import { useState } from 'react';
import props from 'prop-types';

import drpIconLightBlue from '../../assets/icons/ddIcon-light-blue.svg';
import drpIconMediumBlue from '../../assets/icons/ddIcon-medium-blue.svg';
import categoriesData from '../../categories.json';
import style from './category.module.css';

function CategoryBtn({ selectedCategory, setSelectedCategory }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for the dropdown list with categories

  return (
    <>
      <div
        className={`${style.wrapper} ${
          isDropdownOpen
            ? style.wrapperWhenDropdownOpen
            : style.wrapperWhenDropdownClosed
        }`}
      >
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={
            isDropdownOpen ? style.dropdownBtnOpen : style.dropdownBtnClosed
          }
        >
          <span>{selectedCategory ? selectedCategory : 'Categories'}</span>
          <img src={drpIconMediumBlue} />
        </button>
      </div>

      <ul
        className={isDropdownOpen ? style.dropDownOpen : style.dropDownClosed}
      >
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={style.dropDownBtnCategories}
          >
            <span>{selectedCategory ? selectedCategory : 'Categories'}</span>
            <img src={drpIconLightBlue} />
          </button>

          {categoriesData.map(category => (
            <button
              className={style.dropDownBtnCategories}
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              {category}
            </button>
          ))}
        </>
      </ul>
    </>
  );
}
CategoryBtn.propTypes = {
  children: props.object,
  selectedCategory: props.string,
  setSelectedCategory: props.func,
};
export default CategoryBtn;
