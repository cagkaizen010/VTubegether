import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


export default function Buttons(){
    const [yes, setYes] = useState("");
    const [no, setNo] = useState("");

    const updateYes = () => {
        setYes(console.log("O Button Clicked"));
    };

    const updateNo = () => {
        setNo(console.log("X button Clicked"));
    }

    return (
    <>
        <div className=" " >
            <Button onClick={updateYes} size="lg" >X</Button>
            {/* git test */}
        
            <Button onClick={updateNo} size="lg">O</Button>
        </div>
    </>
    )

}