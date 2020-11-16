import React, {useState} from 'react'

const AddItem = (props) => {

   if ("placeholder" in props) {
        return (
            <div className="additem animation">
                <div className="poster  placeholder"></div>
                <div className="title placeholder"></div>
                <div className="description placeholder"></div>
                <div className="ftr flex">
                    <div className="location placeholder"></div>
                    <div className="date placeholder"></div>
                </div>
            </div>
        )
   }
    return (
        <div className="additem">
            
        </div>
    )
}

export default AddItem
