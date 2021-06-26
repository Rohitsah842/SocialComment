import React, { useState } from 'react'
import './Progresscard.css'

function Progresscard(props) {
    const [style, setstyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${props.value}%`,
            backgroundColor: `${props.color}`
        }
        setstyle(newStyle);
    }, 200);
    return (
        <>
            <div >
                <ul>
                    <li>
                        <span style={{ color: props.color }}>{props.title}</span>
                        <div className="progress_bar">
                            <div className="progress-done-bar" style={style}>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Progresscard
