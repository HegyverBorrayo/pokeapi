import React from 'react'
import { Link } from 'react-router-dom'

const PokemonThumnail = ({id, name, image, type}) => {
    const style = `thumb-container ${type}`
    return (
        
        <div className={style}>
            <Link to={`/detail/${id}`}>
                <div className="number">
                    <small>#0{id}</small>
                </div>
                <img src={image} alt={name}/>
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
            </Link>
        </div>
            
    )
}

export default PokemonThumnail