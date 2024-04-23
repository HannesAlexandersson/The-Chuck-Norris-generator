import props from 'prop-types';
import style from './display.module.css';

function DisplayContainer({ loaded, joke, }){

    return(

        <div className={style.displayContainer}>

          {loaded ? (
            <><span>&quot;</span><p>{joke}</p><span>&quot;</span></>
          ) : (
            <></>
          )}
            
        </div>
    );
}
DisplayContainer.propTypes = {
    children: props.object,  
    loaded: props.bool,
    joke: props.string,
  };
export default DisplayContainer