import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>
                My name is Keith. And this is my test react app
            </p>
        </div>
    )
}

export default Rainbow(About)