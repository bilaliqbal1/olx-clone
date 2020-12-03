import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   

import '../props.css';
import '../App.css';
const Header = () => {

    const nav = [
        {Id: 1, lable: "Mobile Phones"},
        {Id: 2, lable: "Cars"},
        {Id: 3, lable: "Motorcycle"},
        {Id: 4, lable: "Houses"},
        {Id: 5, lable: "TV-video-Audio"},
        {Id: 6, lable: "Tablets"},
        {Id: 7, lable: "Land & Plots"},
    ];
    return (
        <React.Fragment>
            {/* top header */}
            <div>
            <div className="header fixed flex aic">
                <div className="logo">
                    <img src={require("../images/logo.png")} />
                </div>
                <div className="location rel flex aic">
                    <div className="icon-search ico">
                        <input className="label s15 font" placeholder="Your location" value= "Pakistan"/>
                        <button className="icon-chevron-down arrow s24 color1"></button>
                    </div>
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find cars, mobile phones and more..." className="query font s15 " />
                    <button className="icon-search btn"></button> 
                </div>
                <div className="actions flext aic">
                    <Link to="/account/login" className="color login fontb s18">Login</Link>
                    <button className="sell flex color aic">   
                        <div className="icon-plus ico s24"></div>
                        <h2 className="s15 font">Sell</h2>
                    </button>
                    
                </div>
            </div>

                {/* sub header categories */}

                <div className="hnav fixed flex aic">
                    <button className="view flex aic color">
                        <h2 className="s18 font">All categories </h2>
                        <button className="icon-chevron-down arrow s24 color1"></button>
                    </button>
                    {
                    nav.map(item => {
                        return(
                            <Link to={"/browser/" + item.Id} className="tn tnhover color  bl s15">{item.lable} </Link>

                        )
                    })
                    }
                </div>
                <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
                <hr /><hr /><hr />
                <div className="banner">
                    <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" alt="header-image" class="header_banner" />
                </div>
                
                
            </div>
            

        </React.Fragment>
    )
}

export default Header
