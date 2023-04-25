import React from "react";

function Component3Clicked() {
    alert("Component 3 clicked")
}

export default function() {
    return <div style={{background: 'blue'}} onClick={Component3Clicked}>Component3</div>
}