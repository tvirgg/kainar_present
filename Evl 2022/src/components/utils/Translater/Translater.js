import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {get} from 'lodash';
let Translater = (props) => {
    const appText = useSelector(state => state.AppData.appText);
    if (appText){
        if (props.path){
            let returnstring = get(appText, props.path);
            if (returnstring){
                if (props.replacment){
                    for (let prop in props.replacment) {
                        let propwithcolon = ':' + prop.toString();
                        if (returnstring.indexOf(propwithcolon) >= 0){
                            returnstring = returnstring.replace(propwithcolon, props.replacment[prop]);
                        }
                    }
                    return(returnstring);
                }else{
                    return(returnstring);
                }
            }else{
                return(props.path);
            }
        }else{
            return(props.path);
        }
    }else{
        return null;
    }
}
export default Translater;


