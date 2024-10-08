import React from 'react'

const Filter = ({filter, setFilter , setSort}) => {
  return (
    <div className='filter-options'>
        <div>
            <p>Status</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Realizadas</option>
                <option value="Incomplete">Não Realizadas</option>
            </select>
        </div>
        <div>
            <p>Ordem alfabética:</p>
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
    </div>
  )
}

export default Filter
