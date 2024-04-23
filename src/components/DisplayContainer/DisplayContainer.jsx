import props from 'prop-types';
import { Speech } from '../index.js';
import style from './display.module.css';

function DisplayContainer({ loaded, joke }) {
  return (
    <div className={style.auto}>
    <div className={style.displayContainer}>
      {loaded ? <p>"{joke}"</p> : <></>}
      
      <Speech joke={joke} />
    </div>
    
</div>
  );
}
DisplayContainer.propTypes = {
  children: props.object,
  loaded: props.bool,
  joke: props.string,
};
export default DisplayContainer;
