import props from 'prop-types';
import style from './redbtn.module.css';

function Redbtn({ children, handleSave }){

    
    return(
        <button className={style.redBtn} onClick={handleSave}>
            {children}
        </button>

    );
}
Redbtn.propTypes = {
    children: props.object,  
    handleSave: props.func,
  };
export default Redbtn