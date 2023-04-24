import React from 'react'
import { got } from './Data'
import withSearch from './withSearch'

function Peoples({ handleKey, searchValue }) {

  const allpeoples = got.houses.reduce((acc, cv) => {
    acc = acc.concat(...cv.people)
    return acc
  }, [])

  const filteredpeoples = allpeoples.filter((p) => p.name.toUpperCase().includes(searchValue))

  return (
    <div>
      <div className='got-input'>
        <input placeholder='search' onKeyUp={handleKey} />
      </div>
      <div className='grid grid-container justify-around'>
        <People filteredpeoples={filteredpeoples} />
      </div>
    </div>
  )
}



function People({ filteredpeoples }) {
  return (
    filteredpeoples.map((p, i) => {
      return (
        <div key={i} className='grid-item '>
          <div className='flex align-center'>
            <img src={p.image} alt={p.name} className='got-avatar' />
            <h2 className='got-name'>{p.name}</h2>
          </div>

          <div className='flex flex-column align-center'>
            <p>{p.description}</p>
            <a href={p.wikiLink}>Learn more</a>
          </div>
        </div>
      )
    }))
}







export default withSearch(Peoples)