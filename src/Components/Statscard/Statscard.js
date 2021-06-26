import React from 'react';
import "./Statscard.css"
function Statscard(props) {
    let style = {
        strokeDashoffset: `calc(314 - (314 * ${props.count}) / 100)`
    }
    return (
        <>
            <div className="stats stats_mob">
                <div className={props.classname}>
                    <p>{props.name}</p>
                    <h5 style={{ marginBottom: "0px" }}>{props.total}</h5>
                    <span style={{ color: 'blueviolet' }}><i className={props.className}>  </i></span><span style={{ color: 'blueviolet' }}>{props.incre}</span>
                </div>
                <div className={props.classname}>
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="50"></circle>
                            <circle cx="70" cy="70" r="50" style={style}></circle>
                        </svg>
                        <div className="number">
                            <h2>{props.count}<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statscard;
