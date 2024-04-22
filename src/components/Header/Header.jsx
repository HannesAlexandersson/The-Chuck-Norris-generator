import props from 'prop-types';
import { CategoryBtn, Jokebtn } from '../index.js';
import style from './header.module.css';

function Header({ selectedCategory, setSelectedCategory, handleGetJoke }) {
  return (
    <>
      <header className={style.container}>
        <Jokebtn handleGetJoke={handleGetJoke} />

        <CategoryBtn
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </header>
    </>
  );
}
Header.propTypes = {
  selectedCategory: props.string,
  handleGetJoke: props.func,
};
export default Header;
