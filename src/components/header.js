import React from 'react'
import {Link} from 'react-router-dom'   

import '../props.css';
import '../App.css';
const Header = () => {
    return (
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
                <Link to="/account/signin" className="fontb s15">Sign in</Link>
                <button className="sell flex aic">   
                    <div className="icon-plus s24"></div>
                    <h2 className="s15 font">Sell</h2>
                </button>

            </div>
        </div>
    )
}

export default Header
