import props from 'prop-types';
import drpIcon from '../../assets/icons/ddIcon.svg';
import { CategoryBtn, Jokebtn } from '../index.js';
import style from './header.module.css';

function Header({ selectedCategory, handleCategorySelect, handleGetJoke, handleGetCategoryJoke }){

    return(
        <>
            <div className={style.container}>
                <Jokebtn  handleGetJoke={handleGetJoke} ><p>New Joke</p></Jokebtn>


                <CategoryBtn selectedCategory={selectedCategory} handleCategorySelect={handleCategorySelect} handleGetCategoryJoke={handleGetCategoryJoke}><p>Categories</p><img src={drpIcon} /></CategoryBtn>
            </div>
        </>
    );
}
Header.propTypes = {
    selectedCategory: props.string, 
    handleCategorySelect: props.func,  
    handleGetJoke: props.func,   
    handleGetCategoryJoke: props.func,
  };
export default Header