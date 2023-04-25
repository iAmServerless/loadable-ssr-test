import React from "react";

function Component1Clicked() {
    alert("Component 1 clicked")
}

export default function() {
    return <div style={{background: 'red'}} onClick={Component1Clicked}>Component1</div>
}