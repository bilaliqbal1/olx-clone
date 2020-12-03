import React, {useEffect, useState} from 'react'
import AddItem from './addItem'
const Home = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        if (loading) {
            let list =  [];
            for (let i = 0; i < 12; i++) {
                list.push(<AddItem placeholder={true} />)
            }
            setList(list)
        }
    },list)
    
    return (
        <React.Fragment>
            
        {/* // <div className="Home">
            
        //     {list}
        // </div> */}
        <div className="app_ribbon">
            <div className="image">
                <img src="//statics.olx.com.pk/external/base/img/phone-app.png" />
            </div>
            <div className="meta">
                <h2 className="title fontb s30 color"> Try the OLX App</h2>
                <h2 className="slogan fontb s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
            </div>
        </div>

        </React.Fragment>
    )
}

export default Home
