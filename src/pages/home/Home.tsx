import { useState, useEffect } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteButton from '../../features/buttons/SiteButton';
import ButtonTypes from '../../features/buttons/types/ButtonTypes';
import SectionDao from '../../entities/section/api/HomeDao';
import type { ProductPageSection } from '../../entities/product/model/ProductType';
import './ui/Home.css';
import type { TestimonialPageSection } from '../../entities/testimonial/model/Testimonial';
import TestimonialDao from '../../entities/section/api/TestimonialDao';
import SiteTitle from '../../features/title/SiteTitle';


const steps = [
    { number: "01", text: "Choose a tour" },
    { number: "02", text: "Get a free consultation" },
    { number: "03", text: "Agree on the details" },
    { number: "04", text: "Pay conveniently" },
    { number: "05", text: "Go on a trip!" }
];
function Step({ step }: { step: { number: string; text: string } }) {
    return (
        <div className="step-wrapper">
            <div className="step-circle">{step.number}</div>
            <h4 style={{ marginTop: "10px" }}>{step.text}</h4>
        </div>
    );
}

function GalleryItem({ item, height }: { item: ProductPageSection, height: string }) {
    return (
        <SiteBlock height={height} backgroundImage={item.imageUrl[0]}>
            <div className="gradient">
                <h3 className="block-text1" style={{ color: "#F5F5F2", paddingRight: "100px" }}>
                    {item.name}, {item.location}
                </h3>
                <img src="/img/pointer.png" className="block-img2" />
            </div>
        </SiteBlock>
    );
}
function TestimonialCard({ item }: { item: TestimonialPageSection }) {
    return (
        <SiteBlock height="320px">
            <div className="column-container " style={{ padding: "20px" }}>

                <div className="row-container">
                    <img src={item.imageUrl} className="testimon-img" />

                    <div className="column-container">
                        <h4><strong>{item.name}</strong></h4>
                        <h4 style={{ color: "#505050" }}>
                            {item.origin} — {item.trip}
                        </h4>
                    </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <h4>{item.message}</h4>
                </div>

            </div>
        </SiteBlock>
    );
}


export default function Home() {
    const [sections, setSections] = useState<ProductPageSection[]>([]);
    const [galleryItems, setGalleryItems] = useState<ProductPageSection[]>([]);
    const [testimonialItems, setTestimonialItems] = useState<TestimonialPageSection[]>([]);

    useEffect(() => {
        SectionDao.getSections().then(data => {
            setSections(data);

            const shuffledGallery = [...data].sort(() => Math.random() - 0.5);
            setGalleryItems(shuffledGallery.slice(0, 4));
        });

        TestimonialDao.getTestimonials().then(testimonials => {
            const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
            setTestimonialItems(shuffled.slice(0, 4));
        });
    }, []);


    return <>
        {/* Your Next Adventure Starts Here */}
        <div className="block " style={{ backgroundImage: 'url("/img/hero.png")', backgroundSize: "cover", width: "100%", height: "900px", marginRight: "0", marginLeft: "0", marginTop: "0" }}>
            <div className="column-container" style={{ width: "50%", marginTop: "280px", position: "absolute", left: "5em", top: "0" }}>
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

                <SiteTitle title="Discover World With Us" subtitle="OUR BENEFITS" />

                <div className="column-container" >
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

                <div className="column-container" >
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
                <SiteTitle title="Unforgettable Journeys At Irresistible Prices" subtitle="HOT DEALS" />

                <div className="column-container" >
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
            <div className="column-container" style={{ width: "100%", paddingTop: "160px", justifyContent: "center", alignItems: "center" }}>
                <h3 style={{ color: '#CAC8C3' }}>Plan Early, Travel Smart: </h3>
                <h2 style={{ color: '#F5F5F2' }}>Book Your Trip 2 Months in Advance </h2>
                <h2 style={{ color: '#F5F5F2', fontWeight: '700', marginBottom: "60px" }}>and Get 15% Off!</h2>

                <SiteButton buttonType={ButtonTypes.White} text="Order Now" icon={<img src="/img/arrow.png" />} padding="16px 120px" />

            </div>
        </div>

        {/* Dream. Travel. Live. */}
        <div className="block">
            <div className="grid2">

                <div className="column-container" >
                    <SiteTitle title="Dream. Travel. Live." subtitle="ABOUT us" />

                    <div style={{ marginTop: "110px" }}>
                        <SiteBlock height='198px' width='392px' backgroundImage="/img/dream_travel_live.jpg" />
                    </div>
                </div>
                <div className="column-container">
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
            <div className="column-container" style={{ marginTop: "100px" }}>
                <h2>Only 5 steps to the dream!</h2>

                <div className="steps-row">
                    {steps.map((step, index) => (
                        <>
                            <Step step={step} />
                            {index !== steps.length - 1 && <img className="step-arrow" src="/img/Arrow_long.png" />}
                        </>
                    ))}

                </div>
            </div>

        </div>

        {/* Postcards from Paradise */}
        <div className="block">

            <div className="column-container">

                <SiteTitle title="Postcards from Paradise" subtitle="our gallery" />

                <div className="grid2">
                    <div className="column-container">

                        <div className="grid3">
                            {galleryItems.slice(0, 2).map(item => (
                                <GalleryItem key={item.slug} item={item} height="340px" />
                            ))}
                        </div>

                        {galleryItems[2] && (
                            <GalleryItem item={galleryItems[2]} height="340px" />
                        )}
                    </div>

                    {galleryItems[3] && (
                        <GalleryItem item={galleryItems[3]} height="700px" />
                    )}
                </div>

            </div>
        </div>

        {/* Read real stories of our clients */}
        <div className="block">
            <div className="grid1">
                <SiteTitle title="Read real stories of our clients" subtitle="OUR TESTIMONIAL" />


                {testimonialItems.slice(0, 2).map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                ))}
                <div style={{ marginTop: "270px" }} >
                    <SiteButton buttonType={ButtonTypes.Black} text="Learn More " icon={<img src="/img/arrow.png" />} />
                </div>

                {testimonialItems.slice(2, 4).map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                ))}

            </div>


        </div>

    </>
}