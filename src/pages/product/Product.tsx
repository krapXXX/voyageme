import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./ui/Product.css";
import ProductDao from "../../entities/section/api/ProductDao";
import type { ProductPageSection } from "../../entities/product/model/ProductType";
import SiteButton from "../../features/buttons/SiteButton";
import ButtonTypes from "../../features/buttons/types/ButtonTypes";
import { AppContext } from "../../features/app_context/AppContext";
import SiteTitle from "../../features/title/SiteTitle";
import SiteBlock from "../../features/block/SiteBlock";

export default function Product() {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<ProductPageSection | null>(null);
    const [loading, setLoading] = useState(true);
    const { isSmallScreen } = useContext(AppContext);

    useEffect(() => {
        if (!slug) return;

        setLoading(true);
        ProductDao
            .getProducts()
            .then(products => {
                const found = products.find(p => p.slug === slug);
                setProduct(found ?? null);
            })
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
        {!isSmallScreen &&
           <div className="block" style={{ marginTop: "0", paddingTop: "180px", display:"grid", gridTemplateColumns:"1fr 1fr"  }}>
               <div>
                 <h2>{product.name}</h2>
                <h4 style={{ color: "#808080" }}>{product.location}</h4>
                <h3 style={{ fontWeight: "600", marginTop: "20px" }}><strong>{product.price}</strong></h3>
                <div style={{ marginTop: "40px" }}>
                    <SiteButton to="#book-section" buttonType={ButtonTypes.Black} text="Book Now " icon={<img src="/img/arrow.png" />} />
                </div>
                <h4 style={{ marginTop: "50px" }}>Dates: <strong>{product.date}</strong></h4>
                <h4>Duration: <strong>{product.duration}</strong></h4>
                <h4 style={{ color: "#808080", marginTop: "20px" }}> {product.descriptionFull}</h4>
                <h4 style={{ marginTop: "20px" }}>Tourists: <strong>{product.tourists}</strong></h4>
                <h4>Departure from: <strong>{product.departure}</strong></h4>
                <div style={{ marginTop: "40px" }}>

                    {product.includes.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "5px"
                            }}
                        >
                            <img style={{ filter: "invert(1)", marginBottom: "9px" }} src="/img/arrow.png" alt="arrow" />
                            <h4 style={{ color: "#808080" }}>{item}</h4>
                        </div>
                    ))}

                </div>
                </div> 
                <div>
                    <img style = {{width :"100%",height:"700px", margin:"20px", borderRadius:"24px", objectFit: "cover" }}src = {product.imageUrl[0]}/>
</div>
            </div>
        }
        { isSmallScreen &&
         <div className="block" >
                <h2>{product.name}</h2>
                <h4 style={{ color: "#808080" }}>{product.location}</h4>
                    <img style = {{width :"100%",height:"370px", marginTop:"20px", borderRadius:"24px", objectFit: "cover" }}src = {product.imageUrl[0]}/>
                <h3  style={{ fontWeight: "600", marginTop: "20px" }}><strong>{product.price}</strong></h3>
                <div style={{ marginTop: "20px" }}>
                    <SiteButton to="#book-section" buttonType={ButtonTypes.Black} text="Book Now " icon={<img src="/img/arrow.png" />} />
                </div>
                <h4 style={{ marginTop: "50px" }}>Dates: <strong>{product.date}</strong></h4>
                <h4>Duration: <strong>{product.duration}</strong></h4>
                <h4 style={{ color: "#808080", marginTop: "20px" }}> {product.descriptionFull}</h4>
                <h4 style={{ marginTop: "20px" }}>Tourists: <strong>{product.tourists}</strong></h4>
                <h4>Departure from: <strong>{product.departure}</strong></h4>
                <div style={{ marginTop: "40px" }}>

                    {product.includes.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "5px"
                            }}
                        >
                            <img style={{ filter: "invert(1)", marginBottom: "9px" }} src="/img/arrow.png" alt="arrow" />
                            <h4 style={{ color: "#808080" }}>{item}</h4>
                        </div>
                    ))}

                </div>
                </div> 
        }

           <div className="block">
                     
                                 <div className="four-grid">
                     
                                     <div className="four-intro">
                                         <SiteTitle title="Booking Conditions" subtitle="WE GARANTEE" />
                                     </div>
                     
                                     <div className="column-container" >
                                         <SiteBlock height='300px'>
                                             <img src="/img/01.png" className="block-img1" />
                                             <div className="block-text1">
                                                 <h3>30% prepayment upon booking</h3>
                                             </div>
                                         </SiteBlock>
                                        <SiteBlock height='300px'>
    <img src="/img/03.png" className="block-img1" />
    <div className="block-text1">
        <h3>Booking confirmation within 24 hours</h3>
    </div>
</SiteBlock>

                                     </div>
                     
                                     <div className="column-container" >
                                         <SiteBlock height='300px'>
                                             <img src="/img/02.png" className="block-img1" />
                                             <div className="block-text1">
                                                 <h3>Free cancellation up to 14 days</h3>
                                             </div>
                                         </SiteBlock>
                                         <SiteBlock height='300px'>
                                             <img src="/img/04.png" className="block-img1" />
                                             <div className="block-text1">
                                                 <h3>Guaranteed airport transfers</h3>
                                             </div>
                                         </SiteBlock>
                                     </div>
                     
                                 </div>
                             </div>

        <div id="book-section"></div>

        </>
    );
}
