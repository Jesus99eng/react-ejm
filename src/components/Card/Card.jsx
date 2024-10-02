import React from 'react'
import './Card.css'

const Card = ({ health, attack, kiRestoreSpeed, defense, name, race, gender, img }) => {
    return (
        <div className="profile">
            <div className="character-profile">
                <div className="character-head">
                    <label>{name}</label>
                    <label>{race}</label>
                    <label>{gender}</label>
                </div>
                <img src={`./public/${img}`} />
                <div className="character-stats">
                    <ul>
                        <li>{`Salud: ${health} `}</li>
                        <li>{`Ataque: ${attack} `}</li>
                        <li>{`Defensa: ${defense} `}</li>
                        <li>{`Ki restauración: ${kiRestoreSpeed} `}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card