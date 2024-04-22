import { useState } from "react";
import props from "prop-types";

import drpIconLightBlue from "../../assets/icons/ddIcon-light-blue.svg";
import drpIconMediumBlue from "../../assets/icons/ddIcon-medium-blue.svg";
import categoriesData from "../../categories.json";
import style from "./category.module.css";

function CategoryBtn({ selectedCategory, setSelectedCategory }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for the dropdown list with categories

  return (
    <>
      {isDropdownOpen ? (
        <ul className={style.dropDownOpen}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span>{selectedCategory ? selectedCategory : "Categories"}</span>
            <img src={drpIconLightBlue} />
          </button>

          {categoriesData.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              {category}
            </button>
          ))}
        </ul>
      ) : (
        <div className={style.wrapper}>
          <button
            className={style.dropdownBtnClosed}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedCategory ? selectedCategory : "Categories"}</span>
            <img src={drpIconMediumBlue} />
          </button>
        </div>
      )}
    </>
  );
}
CategoryBtn.propTypes = {
  children: props.array,
  img: props.element,
  handleCategorySelect: props.func,
  handleGetCategoryJoke: props.func,
};

export default CategoryBtn;
