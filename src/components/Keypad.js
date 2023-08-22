import React from "react";
// Code Keypad Component Here
//let password = "trabPuKcip";

function Keypad (){
    return (
        <div>
            <input type="password"
            onChange={() => {
                console.log('Entering password...')
            }}>

            </input>
        </div>
    )
}

export default Keypad;