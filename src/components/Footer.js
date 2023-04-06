import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble,} from '@fortawesome/free-solid-svg-icons';

const Footer = ({handleCompleteAllTasks,handleDeleteCompletedTasks}) => {
  return (
   <>
      <div id="filter1" className='filt1'>
          <div className="filter1" id="completeAll" onClick={handleCompleteAllTasks}>
            <FontAwesomeIcon icon={faCheckDouble} /> Complete all task
          </div>
          <div className="filter1" id="deleteCompleted" onClick={handleDeleteCompletedTasks}>
            Clear All
          </div>
          
      </div>
      <div className='footer'>
         <a href="https://github.com/sakhawatabbasi"><i className="fa-brands fa-github"></i></a>
        </div>
        
    </>
  )
}

export default Footer;
