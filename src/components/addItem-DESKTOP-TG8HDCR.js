import React, {useState} from 'react'

const AddItem = (props) => {

   if ("placeholder" in props) {
        return (
            <div className="additem animation">
                <div className="poster  animation placeholder"></div>
                <div className="title animation placeholder"></div>
                <div className="description animation placeholder"></div>
                <div className="ftr animation flex">
                    <div className="location animation placeholder"></div>
                    <div className="date animation placeholder"></div>
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
