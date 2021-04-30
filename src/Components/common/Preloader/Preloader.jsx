import loader from "../../../assets/image/Rocket.gif"
import React from "react"

export let Preloader = (props) => {
    return (
        <div>
            <img src={loader} alt='Loader'/>
        </div>
    )
}