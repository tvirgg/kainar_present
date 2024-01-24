import React, {useEffect} from 'react';
import "./Whitelisted.css";
const Whitelisted= (props) => {
    return (<div className="whitelisted">
            <div className="block whitelisted_block">
                <h1 className="whitelisted_h1">
                    Congrats! You found the easter egg! Open a ticket in our discord and send this message: "gimme wl, nice easter egg"
                </h1>
                <a onClick={()=>{props.setwhitelisted(false)}} className="back">
                    back
                </a>
            </div>

    </div>
    )
};

export default Whitelisted;
