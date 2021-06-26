import moment from 'moment';
import React from 'react'
import profile from '../Image/profile.png'
import "./Navbar.css"


function Navbar() {
    // moment.locale(English(Singaopore));

    return (
        <>
            <div className="navbar navbar_mob">
                <div className='navbar_head'>
                    <i className="fas fa-bell" style={{ cursor: "pointer" }}></i>
                    <h4 style={{ marginTop: "5px", marginBottom: "0px" }}>Rohit kumar</h4>
                    <img src={profile} className="img" />
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="navbar_container navbar_container_mob">
                    <div>
                        <h4 style={{ margin: "0 5px" }}>Dashboard</h4>
                        <p style={{ margin: "2px 5px", fontSize: "10px" }}>{moment().format("dddd")}, {moment().format("DD MMMM YYYY")}</p>
                    </div>
                    <div>
                        <button className="btn-add">+ Add</button>
                        <i className="fal fa-search"></i>
                        <input type="text" placeholder="Search for Application hear" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
