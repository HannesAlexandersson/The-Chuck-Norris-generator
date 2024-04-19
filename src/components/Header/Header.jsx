import props from 'prop-types';
import drpIcon from '../../assets/icons/ddIcon.svg';
import { CategoryBtn } from '../index.js';
import style from './header.module.css';

function Header({ selectedCategory, handleCategorySelect }){

    return(
        <>
            <div className={style.container}>
                <button className={style.newJokeBtn}>New Joke</button>


                <CategoryBtn selectedCategory={selectedCategory} handleCategorySelect={handleCategorySelect} ><p>Categories</p><img src={drpIcon} /></CategoryBtn>
            </div>
        </>
    );
}
Header.propTypes = {
    selectedCategory: props.string, 
    handleCategorySelect: props.func,     
   
  };
export default Header