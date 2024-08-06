import React from "react";  
import Image from "next/image";
function EventPoster(props){
    return <>
        <img style={props.style} src={props.posterUrl}></img>

    </>
}

export default EventPoster;