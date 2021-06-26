import React from 'react'
import Statscard from '../Components/Statscard/Statscard.js'
import Chartcard from '../Components/Chartcard/Chartcard.js'
import Progresscard from '../Components/Progresscard/Progresscard.js'
import Card from '../Components/Card/Card.js'
import Doughnut_chart from '../Components/Doughnut_chart/Doughnut_chart.js'
import "./Home.css"
import image from '../Image/image.jpeg'

function Home() {
    const applicationdata = [
        {
            username: "Rosie Metts",
            usericon: "far fa-user-circle",
            smsicon: "fad fa-envelope-square",
            callicon: "far fa-phone-square-alt",
            position: "ios Developer"
        },
        {
            username: "James Scott",
            usericon: "far fa-user-circle",
            smsicon: "fad fa-envelope-square",
            callicon: "far fa-phone-square-alt",
            position: "Node.js Developer"
        },
        {
            username: "Jamie Laurenson",
            usericon: "far fa-user-circle",
            smsicon: "fad fa-envelope-square",
            callicon: "far fa-phone-square-alt",
            position: "Marketing Manager"
        },
        {
            username: "Elizabeth Hurton",
            usericon: "far fa-user-circle",
            smsicon: "fad fa-envelope-square",
            callicon: "far fa-phone-square-alt",
            position: "Senior UX Designer"
        },
        {
            username: "Danny Waston",
            usericon: "far fa-user-circle",
            smsicon: "fad fa-envelope-square",
            callicon: "far fa-phone-square-alt",
            position: "ios Developer"
        },
        {
            username: "Reha Scarlett",
            usericon: "far fa-user-circle",
            smsicon: "fad fa-envelope-square",
            callicon: "far fa-phone-square-alt",
            position: "ios Developer"
        }
    ]


    return (
        <>
            <div className="home home_mob">
                <div className="home-col1 home-col1_mob ">
                    <div className="home_contant1 home_contant1_mob">
                        <Statscard name="Total Application" total="7956" count="87" incre="5.61%" className="fal fa-arrow-up" classname="col1" />
                        <Statscard name="Shortlisted candidate" total="4658" count="20" incre="0.6%" className="fal fa-arrow-up" classname="col2 col2_mob" />
                        <Statscard name="Total Applicable" total="1501" count="35" incre="0.4%" className="fal fa-arrow-down" classname="col3" />
                    </div>

                    <div className="home_contant2 home_contant2_mob">
                        <Chartcard />
                        <div className="progresscard progresscard_mob">
                            <h4>Total Application</h4>
                            <Progresscard value="40" color="rgb(110, 218, 245)" title="Application" />
                            <Progresscard value="80" color="rgb(57, 134, 235)" title="Short Listed" />
                            <Progresscard value="35" color="rgb(248, 40, 25)" title="Reject" />
                            <Progresscard value="20" color="rgb(199, 198, 198)" title="On Hold" />
                            <Progresscard value="90" color="rgb(134, 4, 134)" title="Accepted" />
                        </div>
                    </div>
                    <div className="home_contant3 home_contant3_mob">
                        <div className="Card Card_mob">
                            <div className='card-componet card-componet_mob'>
                                <h4>Referals and campaign stats</h4>
                                <div className="card_container card_container_mob">
                                    <Card title="User's Reached " className='fal fa-arrow-up' incre='+3.59%' total='7956' />
                                    <Card title="Refrals " className='fal fa-arrow-up' incre='+9.01%' total='0662' />
                                </div>
                                <button style={{ backgroundColor: "#419ef9" }} className="btn">Start a New campaign now</button>
                            </div>
                            <div className='card-componet card-componet_mob'>
                                <p style={{ color: "#f72f2f", marginBottom: '0px' }}> <span style={{ padding: "10px", marginRight: "10px" }}><i className="fab fa-telegram-plane"></i></span>40 Compaigns sent in total</p>
                                <p style={{ marginTop: '0px', fontSize: "13px" }}>4 Campaigns sent in last month</p>
                                <div className="card_container card_container_mob">
                                    <Card title="Shares" className='fal fa-arrow-up' incre='+39.18%' total='1478' />
                                    <Card title="Applications" className='fal fa-arrow-up' incre='+12.00%' total='0564' />
                                </div>
                                <button style={{ backgroundColor: "#f72f2f" }} className="btn">Pause All Running campaign</button>
                            </div>
                        </div>
                        <div className="doughnut doughnut_mob">

                            <Doughnut_chart />
                        </div>
                    </div>
                </div>
                <div className="home-col2 home-col2_mob">
                    <div className="headline">
                        <p>Hello John Bayer,</p>
                        <p>You have {applicationdata.length} New Applications Today </p>
                        <img src={image} style={{ height: "300px", width: "300px" }} />
                    </div>
                    <div className="application">
                        <h3>New Application</h3>
                        {
                            applicationdata.map((e, index) => {
                                return (
                                    <div className="application-container" key={index}>

                                        <span style={{ margin: "0 20px" }}><i className={e.usericon}></i></span>
                                        <span style={{ marginRight: "20px" }}><p style={{ marginBottom: "0px", width: "150px" }}>{e.username}</p><span style={{ fontSize: "10px" }}>Applied for {e.position}</span></span>

                                        <span className="icon"><i className={e.smsicon}></i></span>
                                        <span className="icon"><i className={e.callicon}></i></span>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
