import props from 'prop-types';
import { CategoryBtn, Jokebtn } from '../index.js';
import style from './header.module.css';

function Header({ selectedCategory, setSelectedCategory, handleGetJoke }) {
 

  return (
    <>
      <header>
        <div className={style.titleBox}>
          <div className={style.titleWrapper}>
            <h1>***</h1>
            <h1>The Chuck Norris Generator</h1>
            <h1>***</h1>
            <h1>The Chuck Norris Generator</h1>
            <h1>***</h1>
            <h1>The Chuck Norris Generator</h1>
          </div>
          <div className={style.titleWrapper} aria-hidden="true">
            <h1>***</h1>
            <h1>The Chuck Norris Generator</h1>
            <h1>***</h1>
            <h1>The Chuck Norris Generator</h1>
            <h1>***</h1>
            <h1>The Chuck Norris Generator</h1>
          </div>
        </div>
        <div className={style.buttons}>
          <Jokebtn handleGetJoke={handleGetJoke} />
          <CategoryBtn
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </header>
    </>
  );
}
Header.propTypes = {
  selectedCategory: props.string,
  handleGetJoke: props.func,
  setSelectedCategory: props.func,
};
export default Header;
