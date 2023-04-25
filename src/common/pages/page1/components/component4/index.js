import React from "react";


function Component4Clicked() {
    alert("Component 4 clicked")
}

export default function() {
    return <div style={{background: 'pink'}} onClick={Component4Clicked}>Component4</div>
}