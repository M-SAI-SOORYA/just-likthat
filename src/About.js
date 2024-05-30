import React, { useState } from 'react'

export default function About() {
    const [myStyle,setStyle]=useState({
        color:"white",
        backgroundColor:"black"
    })
    const [text,setText]=useState("Enable Light Mode")
    const toggler=()=>{
        if(myStyle.backgroundColor==='black'){
            setStyle({
                color:"black",
                backgroundColor:"white"
            })
            setText("Enable Dark Mode");


        }
        else{
            setStyle({
                color:"white",
                backgroundColor:"black"
            })
            setText("Enable Light Mode");
        }
    }
    return (
        <div className='container'>
            <h1 className='my-2 mx-3'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" style={myStyle} aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <button type="button" onClick={toggler} className="btn btn-primary my-3">{text}</button>
        </div>
    )
}
