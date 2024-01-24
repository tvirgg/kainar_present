import React from 'react';
import "./Faq.css";
import Faq from 'react-faq-component';
const Faq_contaINER = () => {
    const data = {
        title: "",
        rows: [
            {
                title: "When mint?",
                content: "Mid-March."
            },
            {
                title: "Price?",
                content: "Free. Well, not exactly free, because we spent a lot of time on developing the art.\n" +
                    "The exact price will be announced soon."
            },
            {
                title: "Secondary?",
                content: "We will be listed exclusively on Magic Eden."
            },
            {
                title: "What is an airdrop?",
                content: "Airdrop is a distribution of tokens/NFT's to holders of our project.\n" +
                    "There will be 5000 mythical trees, which means that you should have 2 Mongomons to receive a tree."
            },
            {
                title: "Why do i need a tree?",
                content: "Trees will be used with 2 Mongomons to breed a Baby Mongo"
            },
            {
                title: "What's weekly raffle?",
                content: "A raffle is a lottery-based distribution of secondary market royalties between holders."
            },
            {
                title: "What's DAO?",
                content: "DAO is a decision-maker. \n" +
                    "Your ideas and suggestions will be subject to voting, and then will be implemented by our team or outsourced peopl"
            }

    ]};
    return (<div className="faq zindex sect">
                <div className="team__wrap block">
                    <div className="faq_h1">
                        FAQ
                    </div>
                        <Faq data={data}
                             styles={{
                            bgColor: "#68516D",
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
