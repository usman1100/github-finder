import React from 'react'
import SpinnerGif from "./assets/spinner.gif"


const Spinner = () => {
    return(
        <div className="container mx-auto">
            <img src={SpinnerGif} alt="loading..." className="mx-auto"/>
        </div>
    )
}

export default Spinner