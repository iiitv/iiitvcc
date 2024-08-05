import React from "react";  

function EventPoster(props){
    return <>
        <img style={props.style} src={props.posterUrl}></img>
    </>
}

export default EventPoster;