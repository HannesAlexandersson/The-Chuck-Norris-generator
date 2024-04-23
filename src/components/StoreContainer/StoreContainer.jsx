import props from 'prop-types';
import { Redbtn, } from '../index.js';
import style from './store.module.css';

function StoreContainer({ handleSave, }){

    return(
        <div className={style.saveBtn_wrapper}>
            <Redbtn onClick={handleSave} >
                <p>save joke</p>
            </Redbtn>
      </div>
    );
}
StoreContainer.propTypes = {
    children: props.object,  
    handleSave: props.func,
  };
export default StoreContainer