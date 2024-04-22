import props from 'prop-types';
import style from './redbtn.module.css';

function Redbtn(props){

    return(
        <button className={style.redBtn}>
            {props.children}
        </button>

    );
}
Redbtn.propTypes = {
    children: props.string,  
       
  };
export default Redbtn