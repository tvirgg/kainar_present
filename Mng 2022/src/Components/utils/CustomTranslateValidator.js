import Translater from "./Translater/Translater";
import {renderToString} from "react-dom/server";
export const CustomSelectCreator = (mass, path) =>{
    let newmasss = [];
    return newmasss;
}
export const SpecificMassiveSelector = (mass) =>{
    let newmasss = [];
    if (mass){
        mass.forEach(function(item, i) {
            let crop = renderToString(Translater({path: `web.availableSettings.specifics.${item}`}));
            if ( typeof item == "string"){
                newmasss.push({ value: item, label: crop})
            }else{
                newmasss.push({ value: `${item.code}`, label: crop})
            }
        });
    }
    return newmasss;
}
