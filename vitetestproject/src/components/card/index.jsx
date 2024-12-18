import React from 'react'
import './index.css'

const Card = ({ data, setData }) => {
    return (
        <>
            {/* <div className='card'>
                    
                </div> */}

            {
                <div className="cards">
                    {data.map((recipe) => {
                        return (

                            <div className='card' key={recipe.id}>
                                <img src={recipe.image} alt="" />
                                <h1>{recipe.name}</h1>
                                <p>prepTimeMinutes : {recipe.prepTimeMinutes}</p>

                            </div>

                        )
                    })}
                </div>

            }
        </>
    )
}

export default Card