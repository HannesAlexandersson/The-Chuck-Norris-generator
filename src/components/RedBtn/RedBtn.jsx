import props from 'prop-types';
import style from './redbtn.module.css';

function Redbtn(props){

    
    return(
        <button className={style.redBtn} onClick={props.onClick}>
            {props.children}
        </button>

    );
}
Redbtn.propTypes = {
    children: props.object,  
    onClick: props.func,
  };
export default Redbtn