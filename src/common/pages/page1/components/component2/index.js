import React from "react";

function Component2Clicked() {
    alert("Component 2 clicked")
}

export default function() {
    return <div style={{background: 'green'}} onClick={Component2Clicked}>Component2</div>
}