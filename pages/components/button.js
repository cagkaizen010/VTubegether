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
    
        <div className="d-grid gap-2" >
            <Button variant="primary" onClick={updateYes} size="lg" >X</Button>
        
            <Button variant="secondary" onClick={updateNo} size="lg">O</Button>
        </div>
   
    )

}