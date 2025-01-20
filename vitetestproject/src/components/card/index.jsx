import React from 'react'
import './index.css'

const Card = ({ data, setData,searchValue }) => {
    const filtered = data.filter((d) => d.name.toLowerCase().includes(searchValue)) 
    return (
        <>
            {/* <div className='card'>
                    
                </div> */}
            

            {
                <div className="cards">
                    {filtered.map((recipe) => {
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