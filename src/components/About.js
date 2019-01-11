import React from 'react'
import Rainbow from '../hoc/Rainbow'
import Face from '../face.jpg'

const About = () => {
    return(
        <div className="container about">
            <h4 className="center">About</h4>
            <img src={Face} alt="Keith"/>
            <p>
                My name is Keith. And this is my test react app
            </p>
        </div>
    )
}

export default Rainbow(About)