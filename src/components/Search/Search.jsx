import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div>
        <form>
            <div className="container-search">
                <label>
                    <h1>Dragonball Personajes Evaluación</h1>
                </label>
                <label>
                    <p>Buscar un personaje por nombre</p>
                </label>
                <input type="text" className="search-characters" id="search-characters" placeholder="Buscar un personaje" />
            </div>
        </form>
    </div>
  )
}

export default Search