import props from "prop-types";
import style from "./joke.module.css";

function Jokebtn({ children, handleGetJoke }) {
  return (
    <>
      <button className={style.newJokeBtn} onClick={handleGetJoke}>
        {children}
      </button>
    </>
  );
}
Jokebtn.propTypes = {
  children: props.object,
  handleGetJoke: props.func,
};
export default Jokebtn;
