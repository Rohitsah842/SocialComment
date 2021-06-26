import React from 'react'

function Card(props) {
    return (
        <>
            <div style={{ borderRight: '.5px solid rgba(48, 43, 43, 0.932)', padding: '0 20px' }}>
                <h5>{props.title}</h5>
                <span style={{ color: '#419ef9' }}><i className={props.class}></i></span><span style={{ color: '#419ef9' }}>{props.incre}</span>
                <p>{props.total}</p>
            </div>

        </>
    )
}

export default Card
