import React from 'react'
import '../css/Details.css'

const Sizes =({size}) => {
    return (
        <div className="size__css">
            <p>Select Size</p>
            {
                size.map((size,index) =>(
                    <button className="btn" key={index} style={{color:"black"}}>{size}</button>
                )) 
            }
        </div>
     )
}

export default Sizes