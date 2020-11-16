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
        
        <div className="Home">
            
            {list}
        </div>
    )
}

export default Home
