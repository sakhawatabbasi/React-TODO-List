
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';

const AddTask = ({ handleAddTask,handleShow,handleClose,show}) => {
  return (
     <>
        <button class='glowing-btn'><span variant="primary" onClick={handleShow} class='glowing-txt'>
        Ad<span class='faulty-letter'>d</span>Task</span></button>
         <Modal show={show} onHide={handleClose} animation={false}>
           <Modal.Header closeButton>
             <Modal.Title>Adding Task ToDo</Modal.Title>
           </Modal.Header>
           <Modal.Body>
              <form onSubmit={handleAddTask} >
                <input type="text" id="input" placeholder="enter task" />
                <button id="btn" type="submit">
                  <FontAwesomeIcon className='plusicon' icon={faPlus} />
                </button>
              </form>
            </Modal.Body>
         </Modal>
      </>
  )
}


export default AddTask;