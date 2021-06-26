
import React, { useEffect, useState } from 'react'
import "./Sidebar.css"

function Sidebar() {
    const [set, setdata] = useState(false);
    const [showHideStyle, setShowHideStyle] = useState({});
    useEffect(() => {
        click()
    }, [])
    const click = () => {
        setToggleStyle()
        setdata(!set)
    }

    const setToggleStyle = () => {
        if (set && window.innerWidth < 600) {
            setShowHideStyle({
                display: 'grid'
            })
        } else if (!set && window.innerWidth < 600) {
            setShowHideStyle({
                display: 'none'
            })
        }
    }
    return (
        <>
            <div className={set ? "sidebar" : "sidebarToggle"}>
                <h4><i className="fas fa-bars" onClick={click}></i></h4>
                <div className='sideContainer' style={showHideStyle}>
                    <i className="fas fa-home-lg-alt"></i>
                    <i className="fas fa-medkit"></i>
                    <i className="fas fa-folder"></i>
                    <i className="fas fa-calendar-plus"></i>
                    <i className="fas fa-user-friends"></i>
                    <i className="fas fa-sign-out-alt"></i>

                </div>
            </div>
        </>
    )
}

export default Sidebar;

