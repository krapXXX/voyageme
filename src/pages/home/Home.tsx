import { useState, useEffect } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteButton from '../../features/buttons/SiteButton';
import ButtonTypes from '../../features/buttons/types/ButtonTypes';
import SectionDao from '../../entities/section/api/SectionDao';
import type { ProductPageSection } from '../../entities/product/model/ProductType';
import './ui/Home.css';


export default function Home() {
        const [sections, setSections] = useState<ProductPageSection[]>([]);
    
       useEffect(() => {
        SectionDao.getSections().then(setSections);
    }, []);

    return <>
        <div className="hero-section"></div>
        <div className="text-container" style={{ width: "50%", marginTop: "280px", position: "absolute", left: "5em", top: "0" }}>
            <h1 style={{ color: "white" }}>Your Next Adventure Starts Here</h1>
            <h4 style={{ marginTop: "30px", color: "#A8A8A8" }}>Dreaming of sun-kissed beaches, historic cities, or mountain escapes? Don't wait — the world is ready for you!</h4>
            <div style={{ marginTop: "30px" }}>
                <SiteButton buttonType={ButtonTypes.Blur} text="Explore Hot Deals" padding="16px 70px" />
            </div>
        </div>

        <div className="block">

            <div className="grid1">

                <div className="text-container" >
                    <h4 style={{ textDecoration: "uppercase", color: "#6B6963" }}>OUR BENEFITS</h4>
                    <h2>Discover World With Us</h2>
                </div>

                <div className="text-container" >
                    <SiteBlock height='300px'>
                        <img src="/img/01.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>Individual approach</h3>
                            <h4>Each trip is created according to your wishes</h4>
                        </div>
                    </SiteBlock>
                    <SiteBlock height='300px' >
                        <img src="/img/03.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>24/7 support</h3>
                            <h4>We are there for you at every stage of your trip</h4>
                        </div>
                    </SiteBlock>
                </div>

                <div className="text-container" >
                    <SiteBlock height='300px'>
                        <img src="/img/02.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>Security guarantee</h3>
                            <h4>Reliable partners, trusted hotels, insurance</h4>
                        </div>
                    </SiteBlock>
                    <SiteBlock height='300px'>
                        <img src="/img/04.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>Secure booking</h3>
                            <h4>Simple and secure online payments</h4>
                        </div>
                    </SiteBlock>
                </div>

            </div>

        </div>

        <div className="block">
            <div className="grid2">
                <div className="text-container" >
                    <h4 style={{ textDecoration: "uppercase", color: "#CAC8C3" }}>HOT DEALS</h4>
                    <h2>Unforgettable Journeys At Irresistible Prices</h2>
                </div>
                <div className="text-container" >
                    <h4 >Don’t miss out on our best last-minute deals — limited spots, unbeatable prices, and unforgettable experiences.</h4>
                    <div style={{ marginTop: "30px" }}>
                        <SiteButton buttonType={ButtonTypes.Black} text="Find More " icon={<img src="/img/arrow.png" />} />
                    </div>
                </div>
            </div>
              <div className="grid1"style={{ marginTop: "30px" }}>
                  
                   {sections
    .slice()                       // copy array
    .sort(() => Math.random() - 0.5) // shuffle
    .slice(0, 3)                   // take 3
    .map(section => (
        <SiteBlock
            key={section.slug}
            height="450px"
            backgroundImage={section.imageUrl[0]}
        >
            <div className="gradient ">
<img src="/img/pointer.png" className="block-img1" />
            <div className="block-text1 ">
                        

                <h3 style={{ color: '#F5F5F2' }}>{section.name}</h3>
                <h4 style={{ color: '#F5F5F2' }}>{section.description}</h4>
                <h3 style={{ color: '#F5F5F2' }}>{section.price}</h3>
                <h4 style={{ color: '#F5F5F2' }}>
                    Price for {section.tourists}
                </h4>
            </div>
            </div>
        </SiteBlock>
    ))}


                </div>


        </div>

    </>
}