import React from 'react';
import "./Faq.css";
import Faq from 'react-faq-component';
const Faq_contaINER = () => {
    const data = {
        title: "",
        rows: [
            {
                title: "When mint?",
                content: "end of April."
            },
            {
                title: "Where mint?",
                content: "On our website"
            },
            {
                title: "What will be the mint price?",
                content: "Free (ok, not exactly free, because we spent a lot of time developing and drawing, also 50% of the funds will be spent on token liquidity)\n The price will be less than 0.22 SOL"
            },
            {
                title: "What is the secondary market?",
                content: "Magic Eden"
            }
    ]};
    return (<div className="faq zindex sect">
                <div className="team__wrap block">
                    <div className="faq_h1">
                        FAQ
                    </div>
                        <Faq data={data}
                             styles={{
                            bgColor: "#6b8524",
                            titleTextColor: "#ffffff",
                            rowTitleColor: "#ffffff",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#ffffff",
                            arrowColor: "white",
                        }}
                             config={{
                                 arrowIcon: "+",
                             }}/>
                </div>
            </div>
        )
    };

export default Faq_contaINER;
