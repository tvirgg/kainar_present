import './Roadmap.css';
import React from "react";
import Roadmap_num_first from "../../images/Roadmap_num_first.png";
import Roadmap_num_second from "../../images/Roadmap_num_2.png";
import Roadmap_num_third from "../../images/Roadmap_num_3.png";
import Roadmap_num_Fourth from "../../images/Roadmap_num_4.png";
import Roadmap_num_fifth from "../../images/Roadmap_num_5.png";
import roadmap_mob from "../../images/Roadmap320.png";
function Roadmap() {
    return (
<div className="Roadmap block">
    <img src={roadmap_mob} alt="" className="roadmap_mob"/>
    <div className="Roadmap_top">
        <h1 className="Roadmap_h1">
            ROADMAP
        </h1>
        <p className="Roadmap_p">
            This is not our full vision of the project, we will go above and beyond. We will exceed your expectations.
        </p>
    </div>
    <div className="Roadmap_item Roadmap_item_first">
        <img src={Roadmap_num_first} className="Roadmap_item_image Roadmap_item_image__first" alt=""/>
        <div className="Roadmap_post first_map">
            <div className="Roadmap_post_h1">
                FOCUS ON ART
            </div>
            <p className="Roadmap_post_p">
                We are passionate about 3D ultra-realism. Our goal is to create as many attributes as possible, so there won't be any commons. If you have any ideas regarding that, please discuss it in our discord server. We appreciate your ideas.
            </p>
        </div>
    </div>
    <div className="Roadmap_item Roadmap_item_second">
        <img src={Roadmap_num_second} className="Roadmap_item_image Roadmap_item_image__second" alt=""/>
        <div className="Roadmap_post sec_map">
            <div className="Roadmap_post_h1">
                COMMUNITY
            </div>
            <p className="Roadmap_post_p">
                Community is the only thing that we care about. We want to build a strong community of people passionate about our art. Share your opinion and you will be heard.            </p>
        </div>
    </div>
    <div className="Roadmap_item Roadmap_item_third">
        <img src={Roadmap_num_third} className="Roadmap_item_image Roadmap_item_image__third" alt=""/>
        <div className="Roadmap_post third_map">
            <div className="Roadmap_post_h1">
                MINT
            </div>
            <p className="Roadmap_post_p third_p_mb">
                Our mint engine is reliable and we know that there won't be any issues or delays, however we're also considering the option of minting through ME launchpad.</p>
            <p className="Roadmap_post_p">
                As soon as our entire supply is minted, we'll be listed on marketplaces. Magic Eden is our top priority.
                We'll start bringing value to holders right after mint. This includes faction battles, giveaways and whitelists for popular projects!</p>
        </div>
    </div>
    <div className="Roadmap_item Roadmap_item_fourth">
        <img src={Roadmap_num_Fourth} className="Roadmap_item_image Roadmap_item_image__fourth" alt=""/>
        <div className="Roadmap_post fourth_map">
            <div className="Roadmap_post_h1 Roadmap_post_h1_fourth Roadmap_post_h1_fourth_first">
                <span>STAKING</span>
            </div>
            <div className="Roadmap_post_h1 Roadmap_post_h1_fourth Roadmap_post_h1_fourth_sec">
                <spam className="Roadmap_post_h1_right">AND TOKEN</spam>
            </div>
                <p className="Roadmap_post_p third_p_mb">
                    We'll release our token that will be distributed amongst all holders.
                </p>
                <p className="Roadmap_post_p third_p_mb">
                    You'll be able to stake your droids with a compound interest.
                </p>
                <p className="Roadmap_post_p third_p_mb">
                    Our token will have multiple use cases in order to create demand.
                    More info regarding the tokenomics will be released soon.
                </p>
        </div>
    </div>
    <div className="Roadmap_item Roadmap_item_fifth">
        <img src={Roadmap_num_fifth} className="Roadmap_item_image Roadmap_item_image__fifth" alt=""/>
        <div className="Roadmap_post fifth_map">
            <div className="Roadmap_post_h1 Roadmap_post_h1_fifth">
                <span>METAVERSE <br></br>+THE GAME</span>
            </div>
            <p className="Roadmap_post_p third_p_mb">
                In the nearest future, we'll start developing our P2E game. We will reveal more details on this after the mint.
                We plan to make our own metaverse or integrate in the existing ones. More information will be released as we progress along the roadmap.
            </p>
        </div>
    </div>
    {
        /*/
    <div className="Roadmap_item Roadmap_item_second">
        <img src={Roadmap_num_second} className="Roadmap_item_image Roadmap_item_image__first" alt=""/>
    </div>
         */
    }
</div>
    );
}

export default Roadmap;
