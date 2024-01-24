import React from "react";
import classes from "./Privat.module.css";
import classNames from "classnames";
export default function Privat(props) {
    return (
        <div>
            <div className={classNames(classes.chat_list, classes.chat_list_privat)}>
            </div>
            <div className={classes.chat__inputblock}>
                <div className={classes.chat__inputblock_container} id="input_id">
                    <input
                        onFocus={()=>{
                            document.getElementById('input_id').style=" border-color: rgba(255,255,255,.3);\n" +
                                "box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 5px rgba(255,255,255,.25);";
                        }}
                        onBlur={()=>{
                            document.getElementById('input_id').style="";
                        }}
                        type="text" className={classes.chat__input} placeholder="Напишите сообщение..."/>
                    <button className={classes.chat__inputblock__btn}>
                        <svg className={classes.chat__inputblock__btn_svg} xmlns="http://www.w3.org/2000/svg" width="18px"
                             version="1.1"
                             viewBox="0 0 2273 2261">
                            <metadata id="CorelCorpID_0Corel-Layer" />
                            <path className="fil0"
                                  d="M234 1026l856 55c53,4 93,16 93,50 0,34 -40,46 -92,49l-852 55c-47,3 -83,37 -91,83l-145 826c-7,38 7,74 38,97 31,23 70,27 105,9l2071 -1029c35,-18 56,-51 56,-90 0,-39 -21,-72 -56,-90l-2072 -1030c-35,-17 -74,-14 -105,9 -31,23 -45,59 -38,97l141 826c8,46 45,80 91,83z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
