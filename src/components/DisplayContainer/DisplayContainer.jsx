import props from 'prop-types';
import style from './display.module.css';

function DisplayContainer({ loaded, joke }) {
  return (
    <div className={style.displayContainer}>
      {loaded ? <p>"{joke}"</p> : <></>}
    </div>
  );
}
DisplayContainer.propTypes = {
  children: props.object,
  loaded: props.bool,
  joke: props.string,
};
export default DisplayContainer;
