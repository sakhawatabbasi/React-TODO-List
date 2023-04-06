import React from 'react'

const TaskList = ({filteredTasks,editingTask,editingText,setEditingText,handleSave,handleCompleteTask,handleDelete,handleEdit}) => {

  
  
  return (
  <>
    {filteredTasks.map((task) => (
    <ul id="list" key={task.id}>
      <li className="todo" id={`task ${task.completed ? 'completed' : ''}`}>

        {editingTask === task.id ? (
          <>
            <input type="text" className="editinput" placeholder='Edit the text...' value={editingText} onChange={(e) => setEditingText(e.target.value)} />
            <button className='editsave' onClick={() => handleSave(task.id)}>Save</button>
          </>
        ) : (
          <>
            <button className="check">
              <input type="checkbox" checked={task.completed} onChange={() => handleCompleteTask(task.id)} />
            </button>
            <span>{task.text}</span>
            <button className="trash" onClick={() => handleDelete(task.id) } >
              <i className="fas fa-trash" ></i>
             </button>
            <button className="edit" onClick={() => handleEdit(task.id, task.text)}><i className="fas fa-pen" ></i></button>
            </>   
            )}
          </li>
        </ul>
    ))}
 </>
  )
}

export default TaskList;
