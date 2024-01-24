import React, { useState, useEffect } from 'react';
import './roadmap.css'
import imageBackground from '../../images/galarysecback.jpg'

const Roadmap = () => {
    return (
        <div className='Roadmap'>
            <div className='RoadmapBackground'>
            </div>

            <img src={imageBackground} className='RoadmapImageBackground' alt='' />
            <div className="Roadmap sect">
                {/* <div className='RoadmapBackground'></div> */}
                <div className="block">

                    <div className="Roadmap_top">
                        <h1 className="Roadmap_top_h1">Roadmap</h1>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            Phase 0
                        </div>
                        <p className="yellow1 map_item_p teme">
                            Loot Boxes
                        </p>
                        <p className="map_item_p">
                            Building the best Loot Boxes experience on Solana Blockchain. This will ensure our holders will get rewarded each week for sticking with us. We will market our product on Twitter and Discord and grow our following and exposure.                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            Phase 1
                        </div>
                        <p className="yellow1 map_item_p teme">
                            Community
                        </p>
                        <p className="map_item_p">
                            After the mint we will create a strong community, benefiting from Loot Boxes and from many other DAO perks. Best quality whitelists, alpha and airdrops - that's just a rough estimate of what we are planning to give back. We will release Staking for our native token $LUM with interesting Tokenomics.                        Upgrade: make your jpegs animated. It will look awesome, we promise you.
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            Phase 2
                        </div>
                        <p className="yellow map_item_p teme">
                            Loot Events
                        </p>
                        <p className="map_item_p">
                            Collaborations with biggest communities on Solana and our favorite part of it - Loot Events. We will keep this a secret for now. Networking is the key to this space.                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            Phase 3
                        </div>
                        <p className="yellow map_item_p teme">
                            Expansion
                        </p>
                        <p className="map_item_p">
                            Rolling out different events and competitions. Further development of our Loot Boxes website and addition of more interesting gambling mechanics to it and heavy marketing.                        </p>
                    </div>
                    <p className="Roadmap_top_p">
                        After the first 4 steps are done, Roadmap 2.0 will be announced.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Roadmap;