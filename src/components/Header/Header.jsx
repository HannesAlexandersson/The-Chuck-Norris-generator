import props from "prop-types";
import { CategoryBtn, Jokebtn } from "../index.js";
import style from "./header.module.css";

function Header({
  selectedCategory,
  setSelectedCategory,
  handleCategorySelect,
  handleGetJoke,
}) {
  return (
    <>
      <header className={style.container}>
        <Jokebtn handleGetJoke={handleGetJoke}>
          <p>New Joke</p>
        </Jokebtn>

        <CategoryBtn
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
      </header>
    </>
  );
}
Header.propTypes = {
  selectedCategory: props.string,
  handleCategorySelect: props.func,
  handleGetJoke: props.func,
};
export default Header;
