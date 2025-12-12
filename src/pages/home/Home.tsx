import { useState, useEffect } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteButton from '../../features/buttons/SiteButton';
import ButtonTypes from '../../features/buttons/types/ButtonTypes';
import SectionDao from '../../entities/section/api/HomeDao';
import type { ProductPageSection } from '../../entities/product/model/ProductType';
import './ui/Home.css';
import { TestimonialPageSection } from '../../entities/testimonial/model/Testimonial';


export default function Home() {
    const [sections, setSections] = useState<ProductPageSection[]>([]);
const [galleryItems, setGalleryItems] = useState<ProductPageSection[]>([]);
const [testimonialItems,setTestimonialItems]=useState<TestimonialPageSection[]>([]);
  
useEffect(() => {
    SectionDao.getSections().then(data => {
        setSections(data);

        const shuffled = data.slice().sort(() => Math.random() - 0.5);
        setGalleryItems(shuffled.slice(0, 4)); 

 const shuffled = data.slice().sort(() => Math.random() - 0.5);
        setGalleryItems(shuffled.slice(0, 4)); 

    });
}, []);

    return <>
        {/* Your Next Adventure Starts Here */}
        <div className="block " style={{ backgroundImage: 'url("/img/hero.png")', backgroundSize: "cover", width: "100%", height: "900px", marginRight: "0", marginLeft: "0", marginTop: "0" }}>
            <div className="text-container" style={{ width: "50%", marginTop: "280px", position: "absolute", left: "5em", top: "0" }}>
                <h1 style={{ color: "white" }}>Your Next Adventure Starts Here</h1>
                <h4 style={{ marginTop: "30px", color: "#A8A8A8" }}>Dreaming of sun-kissed beaches, historic cities, or mountain escapes? Don't wait — the world is ready for you!</h4>
                <div style={{ marginTop: "30px" }}>
                    <SiteButton buttonType={ButtonTypes.Blur} text="Explore Hot Deals" padding="16px 70px" />
                </div>
            </div>
        </div>

        {/* Discover World With Us */}
        <div className="block">

            <div className="grid1">

                <div className="text-container" >
                    <h4 style={{ textTransform: "uppercase", color: "#6B6963" }}>OUR BENEFITS</h4>
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

        {/* Unforgettable Journeys At Irresistible Prices */}
        <div className="block">
            <div className="grid2">
                <div className="text-container" >
                    <h4 style={{ textTransform: "uppercase", color: "#6B6963" }}>HOT DEALS</h4>
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
        {/* and Get 15% Off! */}
        <div className="block" style={{ backgroundImage: 'url("/img/hero2.jpg")', backgroundSize: "cover", height: "600px", marginRight: "0", marginLeft: "0" }}>
            <div className="text-container" style={{ width: "100%", paddingTop: "160px", justifyContent: "center", alignItems: "center" }}>
                <h3 style={{ color: '#CAC8C3' }}>Plan Early, Travel Smart: </h3>
                <h2 style={{ color: '#F5F5F2' }}>Book Your Trip 2 Months in Advance </h2>
                <h2 style={{ color: '#F5F5F2', fontWeight: '700', marginBottom: "60px" }}>and Get 15% Off!</h2>

                <SiteButton buttonType={ButtonTypes.White} text="Order Now" icon={<img src="/img/arrow.png" />} padding="16px 120px" />

            </div>
        </div>

        {/* Dream. Travel. Live. */}
        <div className="block">
            <div className="grid2">
                <div className="text-container" >
                    <h4 style={{ textTransform: "uppercase", color: "#6B6963" }}>ABOUT us</h4>
                    <h2>Dream. Travel. Live.</h2>
                    <div style={{ marginTop: "110px" }}>
                        <SiteBlock height='198px' width='392px' backgroundImage="/img/dream_travel_live.jpg" />
                    </div>
                </div>
                <div className="text-container">
                    <h4>We’re more than just a travel agency — we’re
                        <strong style={{ fontStyle: "italic" }}> your trusted partner </strong>
                        in creating unforgettable journeys.</h4>
                    <h4 style={{ marginTop: "15px" }}>With years of experience and a passion
                        for unique adventures, we turn your travel<strong style={{ fontStyle: "italic" }}>
                            dreams into reality.</strong></h4>
                    <h4 style={{ marginTop: "15px" }}>From sunny getaways to cultural escapes, we’ve got the perfect trip<strong style={{ fontStyle: "italic" }}> waiting for you.</strong></h4>
                    <div style={{ marginTop: "110px" }}>

                        <SiteButton buttonType={ButtonTypes.Black} text="Learn More " icon={<img src="/img/arrow.png" />} />
                    </div>
                </div>
            </div>
            <div className="text-container" style={{ marginTop: "100px" }}>
                <h2>Only 5 steps to the dream!</h2>
                <div className="steps-row">
                    <div className="step-wrapper">
                        <div className="step-circle">01</div>
                        <h4 style={{ marginTop: "10px" }}>Choose a tour</h4>
                    </div>

                    <img className="step-arrow" src="/img/Arrow_long.png" />

                    <div className="step-wrapper">
                        <div className="step-circle">02</div>
                        <h4 style={{ marginTop: "10px" }}>Get a free consultation</h4>
                    </div>

                    <img className="step-arrow" src="/img/Arrow_long.png" />

                    <div className="step-wrapper">
                        <div className="step-circle">03</div>
                        <h4 style={{ marginTop: "10px" }}>Agree on the details</h4>
                    </div>

                    <img className="step-arrow" src="/img/Arrow_long.png" />

                    <div className="step-wrapper">
                        <div className="step-circle">04</div>
                        <h4 style={{ marginTop: "10px" }}>Pay conveniently</h4>
                    </div>

                    <img className="step-arrow" src="/img/Arrow_long.png" />

                    <div className="step-wrapper">
                        <div className="step-circle">05</div>
                        <h4 style={{ marginTop: "10px" }}>Go on a trip!</h4>
                    </div>


                </div>
            </div>
        </div>

        {/* Postcards from Paradise */}
<div className="block">
    <div className="text-container">
        <h4 style={{ textTransform: "uppercase", color: "#6B6963" }}>
            our gallery
        </h4>
        <h2>Postcards from Paradise</h2>

       <div className="grid2">

    <div className="text-container">
        <div className="grid3">

            {galleryItems[0] && (
                <SiteBlock
                    height="340px"
                    backgroundImage={galleryItems[0].imageUrl[0]}
                >
                    <div className="gradient">
                        <h3 className="block-text1" style={{ color: "#F5F5F2" }}>
                            {galleryItems[0].name}, {galleryItems[0].location}
                        </h3>
                    </div>
                </SiteBlock>
            )}

            {galleryItems[1] && (
                <SiteBlock
                    height="340px"
                    backgroundImage={galleryItems[1].imageUrl[0]}
                >
                    <div className="gradient">
                        <h3 className="block-text1" style={{ color: "#F5F5F2" }}>
                            {galleryItems[1].name}, {galleryItems[1].location}
                        </h3>
                    </div>
                </SiteBlock>
            )}

        </div>

        {galleryItems[2] && (
            <SiteBlock
                height="340px"
                backgroundImage={galleryItems[2].imageUrl[0]}
            >
                <div className="gradient">
                    <h3 className="block-text1" style={{ color: "#F5F5F2" }}>
                        {galleryItems[2].name}, {galleryItems[2].location}
                    </h3>
                </div>
            </SiteBlock>
        )}
    </div>

    {galleryItems[3] && (
        <SiteBlock
            height="700px"
            backgroundImage={galleryItems[3].imageUrl[0]}
        >
            <div className="gradient">
                <h3 className="block-text1" style={{ color: "#F5F5F2" }}>
                    {galleryItems[3].name}, {galleryItems[3].location}
                </h3>
            </div>
        </SiteBlock>
    )}

</div>

    </div>
</div>

        {/* Read real stories of our clients */}
  <div className="block">

            <div className="grid1">

                <div className="text-container" >
                    <h4 style={{ textTransform: "uppercase", color: "#6B6963" }}>OUR TESTIMONIAL</h4>
                    <h2>Read real stories of our clients</h2>
                </div>

                <div className="text-container" >
                    <SiteBlock height='320px'>
                        <img src="/img/01.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>Individual approach</h3>
                            <h4>Each trip is created according to your wishes</h4>
                        </div>
                    </SiteBlock>
                    <SiteBlock height='320px' >
                        <img src="/img/03.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>24/7 support</h3>
                            <h4>We are there for you at every stage of your trip</h4>
                        </div>
                    </SiteBlock>
                </div>

                <div className="text-container" >
                    <SiteBlock height='320px'>
                        <img src="/img/02.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>Security guarantee</h3>
                            <h4>Reliable partners, trusted hotels, insurance</h4>
                        </div>
                    </SiteBlock>
                    <SiteBlock height='320px'>
                        <img src="/img/04.png" className="block-img1" />
                        <div className="block-text1">
                            <h3>Secure booking</h3>
                            <h4>Simple and secure online payments</h4>
                        </div>
                    </SiteBlock>
                </div>

            </div>

        </div>
    </>
}