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
        <div className="block " style={{ backgroundImage: 'url("/img/hero.png")', backgroundSize: "cover", width: "100%", height: "900px", marginRight: "0", marginLeft: "0", marginTop: "0" }}>
            <div className="text-container" style={{ width: "50%", marginTop: "280px", position: "absolute", left: "5em", top: "0" }}>
                <h1 style={{ color: "white" }}>Your Next Adventure Starts Here</h1>
                <h4 style={{ marginTop: "30px", color: "#A8A8A8" }}>Dreaming of sun-kissed beaches, historic cities, or mountain escapes? Don't wait — the world is ready for you!</h4>
                <div style={{ marginTop: "30px" }}>
                    <SiteButton buttonType={ButtonTypes.Blur} text="Explore Hot Deals" padding="16px 70px" />
                </div>
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
                        <SiteButton buttonType={ButtonTypes.Black} text="Learn More " icon={<img src="/img/arrow.png" />} />
                    </div>
                </div>
            </div>
            <div className="grid1" style={{ marginTop: "30px" }}>

                {sections
                    .slice()                       
                    .sort(() => Math.random() - 0.5) 
                    .slice(0, 3)                   
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

        <div className="block" style={{ backgroundImage: 'url("/img/hero2.jpg")', backgroundSize: "cover", height: "600px", marginRight: "0", marginLeft: "0" }}>
            <div className="text-container" style={{ width: "100%", paddingTop: "160px", justifyContent: "center", alignItems: "center" }}>
                <h3 style={{ color: '#CAC8C3' }}>Plan Early, Travel Smart: </h3>
                <h2 style={{ color: '#F5F5F2' }}>Book Your Trip 2 Months in Advance </h2>
                <h2 style={{ color: '#F5F5F2', fontWeight: '700', marginBottom: "60px" }}>and Get 15% Off!</h2>

                <SiteButton buttonType={ButtonTypes.White} text="Order Now" icon={<img src="/img/arrow.png" />} padding="16px 120px" />

            </div>
        </div>

        <div className="block">
            <div className="grid2">
                <div className="text-container" >
                    <h4 style={{ textDecoration: "uppercase", color: "#6B6963" }}>ABOUT US</h4>
                    <h2>Dream. Travel. Live.</h2>
                    <div style={{ marginTop: "110px" }}>
                        <SiteBlock height='198px' width='392px' backgroundImage="/img/dream_travel_live.jpg" />
                    </div>
                </div>
                <div className = "text-container">
<h4>We’re more than just a travel agency — we’re<strong> your trusted partner </strong>in creating unforgettable journeys.</h4>
<h4 style={{ marginTop: "15px" }}>With years of experience and a passion for unique adventures, we turn your travel<strong> dreams into reality.</strong></h4>
<h4 style={{ marginTop: "15px" }}>From sunny getaways to cultural escapes, we’ve got the perfect trip<strong> waiting for you.</strong></h4>
                    <div style={{ marginTop: "110px" }}>
                      
                        <SiteButton buttonType={ButtonTypes.Black} text="Learn More " icon={<img src="/img/arrow.png" />} />
</div>
                </div>
            </div>
        </div>
    </>
}