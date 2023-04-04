import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks,} from '@fortawesome/free-solid-svg-icons';
import '../src/App.css'
import AddTask from './components/AddTask';
import Filters from './components/Filters';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [searchText, setSearchText] = useState(''); 
  const [show, setShow] = useState(false);



  const handleAddTask = (event) => {
    event.preventDefault();
    const input = event.target.elements.input;
    if (input.value.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input.value, completed: false }]);
      input.value = '';
    }
    toast.success('Task added successfully!');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');  
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      
       else {
        return task;
      }
      
    }));
   
toast.success('Task completed!');
  };

  const handleCompleteAllTasks = () => {
    setTasks(tasks.map((task) => ({ ...task, completed: true })));
    toast.success('All tasks completed!');
  };

  const handleDeleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => task.completed && ! task.completed));
    toast.warn('All tasks cleared!');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  }).filter((task) => task.text.toLowerCase().includes(searchText.toLowerCase()));
  const handleEdit = (id, text) => {
    setEditingTask(id);
    setEditingText(text);
  };

  const handleSave = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingText } : task
      )
    );
    setEditingTask(null);
    setEditingText('');
    toast.info('Task updated successfully!');
  };
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
       <ToastContainer/>
      <h1 id="title">
        <FontAwesomeIcon icon={faTasks} />&nbsp; Todo List
      </h1>
      {/* add task */}
    <AddTask 
              handleAddTask={handleAddTask}
              handleClose={handleClose}
              handleShow={handleShow}
              show={show}
        />
{/* filters */}
      <Filters
        searchText={searchText}
        setSearchText={setSearchText} 
        filter={filter} 
        setFilter={setFilter}
        tasks={tasks}
        
      />
  {/* Task list */}
       <TaskList
        filteredTasks={filteredTasks}
        editingTask={editingTask}
        editingText={editingText}
        setEditingText={setEditingText} 
        handleSave={handleSave}
        handleCompleteTask={handleCompleteTask}
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
    
        />
        {/* footer */}
      <Footer 
      handleCompleteAllTasks={handleCompleteAllTasks}  
      handleDeleteCompletedTasks={handleDeleteCompletedTasks} 
      />
     </div>
      )
      }

export default App;