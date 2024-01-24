import React from 'react';
import "./faq.css";
import Faq from 'react-faq-component';

const FaqComponents = () => {
    const data = {
        title: "",
        rows: [
            {
                title: "Wen Mint | Price | Supply?",
                content: "TBD / TBD / 2525"
            },
            {
                title: "Who are the Lumbeers?",
                content: "Lumbeers are unlucky mf's, that's why they've created their Loot Boxes - to be profitable when someone else gets nothing. Some will say rigged, well... It's their loot boxes after all."
            },
            {
                title: "Loot Boxes",
                content: "Loot boxes will welcome a lot of lucky lumbeers and a lot of solana degens. Furthermore, Lumbeers will get 80% of the revenue made by Loot Boxes. From Loot Boxes you will be able to get $SOL, $LUM (our native token), Free Loot Boxes and different bluechip and hyped NFTs."
            },
            {
                title: "More Utility?",
                content: "Staking for native token, Airdrops for Holders, Raffles for NFTs and whitelists, Exclusive DAO for alpha Lumbeers only.\n" +
                    "Remember that this is only the beginning of the 📖│roadmap , once this part will be completed, we will roll out our next banger."
            },
            {
                title: "Where Mint | Wen wallet collection",
                content: "LMNFT | TBD"
            }

        ]
    };
    return (
        <div className="faq sect" id="faq">
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
                    }} />
            </div>
        </div>
    )
};

export default FaqComponents;
