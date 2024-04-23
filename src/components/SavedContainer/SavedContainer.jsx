import props from 'prop-types';
import style from './saved.module.css';

function SavedContainer({ jokes, handleRemoveJoke }){

    return(
        <div className={style.savedContainer}>
          <h2>Saved jokes: </h2>
          {jokes && jokes.map((joke, index) => (
            <div key={index} className={style.jokeListItem}>
              <p>{index + 1}. {joke}</p>
              <button className={style.removeBtn} onClick={() => handleRemoveJoke(index)}>Remove</button>
            </div>
          ))}
        </div>
    );
}
SavedContainer.propTypes = {
    children: props.object,  
    handleRemoveJoke: props.func,
    jokes: props.array,
  };
export default SavedContainer