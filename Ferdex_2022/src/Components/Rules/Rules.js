import './Rules.css';
import React, {useEffect, useState} from "react";
import first_light from "../../images/rules_light_first.png";
import sec_light from "../../images/rules_light_sec.png";
import renderPrevButtonlink from "../../images/left_arrow_galer.png";
import renderNextButtonlink from "../../images/right_arrow_galer.png";
import one from "../../images/Rulles_1.png";
import two from "../../images/Rulles_2.png";
import three from "../../images/Rulles_3.png";
function Rules() {
    const [position, setposition] = useState(1);
    useEffect(() => {
        if (position === 1){
            document.getElementById("Rules_second__box").style.top="0px";
            document.getElementById("arrows_block_ar__first").style="opacity: 0;";
        }else if (position === 2){
            document.getElementById("Rules_second__box").style.top="-800px";
            document.getElementById("arrows_block_ar__first").style="opacity: 1;";
            document.getElementById("arrows_block_ar__second").style="opacity: 1;";
        }else{
            document.getElementById("Rules_second__box").style.top="-1600px";
            document.getElementById("arrows_block_ar__second").style="opacity: 0;";
        }
    }, [position]);
    return (
        <div className="Rules block">
            <div className="Rules_first">
                <h1 className="Rules_first_h1">
                   <span className="spacing">RULES</span> <br></br>
                    OF ROBOTICS
                </h1>
            </div>
            <div className="Rules_second">
                <div className="arrows_block">
                    <a className="arrows_block_ar" id="arrows_block_ar__first" onClick={()=>{if(position!==1){setposition(position - 1);}}}>
                        <svg className="arrows_block_ar__svg" width="25" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.51144 10.9301L11.7617 1.39697L21.012 10.9301" stroke="white"/>
                            <ellipse rx="1.72334" ry="1.67222" transform="matrix(0 1 1 0 2.54185 10.8757)" fill="white"/>
                            <ellipse rx="1.72334" ry="1.67222" transform="matrix(0 1 1 0 20.9364 10.8757)" fill="white"/>
                        </svg>
                    </a>
                    <a className="arrows_block_ar arrows_block_ar_end"  id="arrows_block_ar__second" onClick={()=>{if(position!==3){setposition(position + 1);}}}>
                        <svg width="25"  viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrows_block_ar__svg_end">
                            <path d="M2.51144 10.9301L11.7617 1.39697L21.012 10.9301" stroke="white"/>
                            <ellipse rx="1.72334" ry="1.67222" transform="matrix(0 1 1 0 2.54185 10.8757)" fill="white"/>
                            <ellipse rx="1.72334" ry="1.67222" transform="matrix(0 1 1 0 20.9364 10.8757)" fill="white"/>
                        </svg>
                    </a>
                </div>
                <div className="Rules_second__box" id="Rules_second__box">
                    <div className="Rules_second_item Rules_second_item__first">
                        <img src={first_light} className="first_light light" alt=""/>
                        <img src={one} className="Rules_second_item_num" alt=""/>
                        <p className="Rules_second_item_p">
                            A ROBOT MAY NOT INJURE A HUMAN BEING, OR, THROUGH INACTION, ALLOW A HUMAN BEING TO COME TO HARM.
                        </p>
                    </div>
                    <div className="Rules_second_item Rules_second_item__sec">
                        <img src={sec_light} className="sec_light light" alt=""/>
                        <img src={two} className="Rules_second_item_num" alt=""/>
                        <p className="Rules_second_item_p">
                            A ROBOT MUST OBEY THE ORDERS GIVEN IT BY HUMAN BEINGS EXCEPT WHERE SUCH ORDERS WOULD CONFLICT WITH THE FIRST LAW
                        </p>
                    </div>
                    <div className="Rules_second_item Rules_second_item__third">
                        <img src={sec_light} className="third_light light" alt=""/>
                        <img src={three} className="Rules_second_item_num" alt=""/>
                        <p className="Rules_second_item_p">
                            AND THREE, A ROBOT MUST PROTECT ITS OWN EXISTENCE AS LONG AS SUCH PROTECTION DOES DOT CONFLICT WITH THE FIRST OR SECOND LAWS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rules;
