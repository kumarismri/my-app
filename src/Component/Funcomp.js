import React from 'react'
import './Style.css'

function Funcomp() {
    return (
        <div className='functioncomponent'>
            <h2>This is created using Functional Component</h2>
            <p className='paragraph'>This is done using external CSS</p>
            <p style={{color:"blueviolet"}}>This is done using internal CSS</p>    
        </div>
    )
}

export default Funcomp
