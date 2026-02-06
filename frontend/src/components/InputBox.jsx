import React from "react";

function InputBox()
{
    return (
        <div className="bg-amber-50 w-lg h-lg p-8 flex flex-col rounded-3xl justify-center items-center">
            <h1 className="text-center text-3xl m-4">Your Inputs go here!!!</h1>
            <input className="p-4 rounded-3xl border-2 text-center" placeholder="Enter the value of X matrix"></input>
        </div>
    )
}

export default InputBox;