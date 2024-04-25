import props from 'prop-types';
import { Redbtn } from '../index.js';
import style from './joke.module.css';

function Jokebtn({ handleGetJoke }) {
  return (
    <>
      <Redbtn className={style.newJokeBtn} onClick={handleGetJoke}>
        <p>New Joke</p>
      </Redbtn>
    </>
  );
}
Jokebtn.propTypes = {
  children: props.object,
  handleGetJoke: props.func,
  
};
export default Jokebtn;
