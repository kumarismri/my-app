import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'

export default class Classcomponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            
        <div className='classcomponent'>
            <h2>This is created using class Component</h2>
            <p className='paragraph'>This is done using external CSS</p>
            <p style={{color:"blueviolet"}}>This is done using internal CSS</p>    
        </div>
        
        )
    }
}
