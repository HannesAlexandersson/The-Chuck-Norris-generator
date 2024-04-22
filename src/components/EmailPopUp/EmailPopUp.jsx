import props from 'prop-types';
import styles from './popup.module.css';


function EmailPopUp({ isOpen, onClose, handleGetTxtFile  }) {
    
  
    
  
    return (
        <div className={`${styles.popup} ${isOpen ? styles.open : ''}`}>
        <div className={styles.popupContent}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h2>Save the jokes</h2>
          
          <button className={styles.saveBtn} onClick={handleGetTxtFile}>Save</button>
        </div>
      </div>
    
    );
  }
  EmailPopUp.propTypes = {
    isOpen: props.bool,  
    onClose: props.func,
    onSend: props.func,
    jokes: props.array,
    handleGetTxtFile: props.func,
       
  };
  export default EmailPopUp;