import React from 'react'

const Filters = ({searchText,setSearchText,filter,setFilter,tasks}) => {
  return (
    <>
    <div id="filter">
    <div className='mySearch'>
      <input type="text" id="inputSer"  placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </div>

      <div className={`filter ${filter === 'all' ? 'active' : ''}`} id="all" onClick={() => setFilter('all')}>
        All ( <span id="allCount">{tasks.length}</span> )
      </div>


      <div className={`filter ${filter === 'completed' ? 'active' : ''}`} id="completed" onClick={() => setFilter('completed')}>
        Complete ( <span id="completeCount">{tasks.filter((task) => task.completed).length}</span> )
      </div>
      <div className={`filter ${filter === 'incomplete' ? 'active' : ''}`} id="incomplete" onClick={() => setFilter('incomplete')}>
        Incomplete ( <span id="incompleteCount">{tasks.filter((task) => !task.completed).length}</span> )
      </div> 
    </div>

  </>
  )
}


export default Filters
