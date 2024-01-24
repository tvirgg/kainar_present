import React from 'react';
import "./Faq.css";
import Faq from 'react-faq-component';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Faq_contaINER = () => {
    const data = {
        title: "",
        rows: [
            { title: "Who are you?",
                content: "We are a team of game-dev enthusiasts, who want to create the best blockchain-integrated P2E game." },
            { title: "Do you have any experience?",
                content: "We have huge game-dev background, and we are very serious about our project. Right now, while you're reading this, we're thinking of the lore, p2e mechanics, 3d environment and much more." },
            { title: "Wen game?",
                content: "Game development is a very time-consuming and costly process. We are trying to do what we can right now, but our resources are limited." },
            { title: "Supply, price, date?",
                content: "There will be 8888 droids at 1 SOL each. Price may vary depending on SOL price at the mint date.\n" +
                    "Mint will be launched aprx. end of the March." },
            { title: "Is the team doxxed?",
                content: "We are considering an option of minting through ME launchpad, so yeah, we will be doxxed." },
            { title: "Will there be a token?",
                content: "Yes, there will be a token. More details on that will be announced in our Discord." },
            { title: "When listing?",
                content: "We'll be listed on ME right after mint." },
            { title: "How can i get whitelisted?",
                content: "WL requirements are regularly updated on on our Discord." },
            { title: "When rarity?",
                content: "Rarity will be available on MoonRank and Solrarity." },
            { title: "What is DAO?",
                content: "We have big plans on our DAO. Holders will be able to directly participate in the game development. Voting system will be introduced" }
    ]};
    return (<div className="faq block">
                <div className="faq__container">
                    <h1 className="faq_white_h1 faq_white_h1_first">
                        DO YOU
                    </h1>
                    <h1 className="faq_white_h1 faq_white_h1_sec">
                        HAVE
                    </h1>
                    <h1 className="faq_black_h1">
                        QUESTIONS
                    </h1>
                        <div className="faq_block">
                                                <Faq data={data}
                             styles={{
                                 bgColor: "#48484A00",
                                 titleTextColor: "#ffffff",
                                 titleTextSize: '48px',
                                 rowTitleColor: "#ffffff",
                                 rowTitleTextSize: 'large',
                                 rowContentColor: "#ffffff",
                                 rowContentTextSize: '16px',
                                 rowContentPaddingTop: '20px',
                                 rowContentPaddingBottom: '20px',
                                 rowContentPaddingLeft: '20px',
                                 rowContentPaddingRight: '20px',
                                 arrowColor: "white",
                             }}
                             config={{
                                 arrowIcon: "+",
                             }}/>
                        </div>
                </div>
            </div>
        )
    };

export default Faq_contaINER;
