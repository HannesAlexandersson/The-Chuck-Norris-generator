import props from 'prop-types';
import { EmailPopUp, Redbtn } from '../index.js';
import style from './send.module.css';

function SendContainer({ jokes, isModalOpen, setIsModalOpen, handleGetTxtFile,  }){

    return(
        <div className={style.sendContainer}>

            <Redbtn className={style.saveJokeInit} onClick={() => { 
                {jokes.length > 0 ? setIsModalOpen(true) : alert('You havent saved any jokes yet!')}          
                }}>
                <p>download jokes</p>
            </Redbtn>
            {isModalOpen && (
                <EmailPopUp
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jokes={jokes}
                handleGetTxtFile={handleGetTxtFile}
                />
            )}
        
        </div>
    );
}
SendContainer.propTypes = {
    jokes: props.array,  
    handleGetTxtFile: props.func,
    isModalOpen: props.bool,    
    setIsModalOpen: props.func,
  };

export default SendContainer