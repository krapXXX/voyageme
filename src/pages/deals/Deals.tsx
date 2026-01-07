import { useContext, useEffect, useState } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteTitle from '../../features/title/SiteTitle';
import './ui/Deals.css';
import type { ProductPageSection } from '../../entities/product/model/ProductType';
import ProductDao from '../../entities/section/api/ProductDao';
import SiteButton from '../../features/buttons/SiteButton';
import ButtonTypes from '../../features/buttons/types/ButtonTypes';
import { AppContext } from '../../features/app_context/AppContext';
import { Link } from "react-router-dom";


function ProductCardBig({ item }: { item: ProductPageSection }) {
    return (
        <SiteBlock width="100%" height="250px">
            <div className="row-container" style={{ margin: "20px", display: "flex", justifyContent: "space-between" }}>
                <div className="row-container" style={{ width: "100%" }}>
                    <img style={{ width: "26%", height: "210px", marginTop: "20px", borderRadius: "24px", objectFit: "cover" }} src={item.imageUrl[0]} />
                    <div className="column-container" style={{ margin: "20px" }}>
                        <h3 style={{ fontWeight: "600" }}><strong>{item.name}</strong></h3>
                        <h4 style={{ color: "#808080" }}>{item.location}</h4>
                        <h4 style={{ color: "#808080", marginTop: "-12px" }}>{item.date}</h4>
                        <div className="stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div className="star" key={i}>
                                    <img src="/img/rating.png" alt="star" />
                                    <div
                                        className="star-fill"
                                        style={{
                                            width:
                                                item.rating >= i + 1
                                                    ? "100%"
                                                    : item.rating > i
                                                        ? `${(item.rating - i) * 100}%`
                                                        : "0%"
                                        }}
                                    />
                                </div>
                            ))}
                        <h4 style={{ color: "#18150E" }}>{item.rating}</h4>

                        </div>
                        <h4 className="text-ellipsis" title={item.description} style={{ color: "#18150E" }}>{item.description}</h4>
                        <h4 style={{ color: "#808080", position: "absolute", bottom: "0" }}>{item.departure}</h4>

                    </div>
                </div>
                <div className="column-container" style={{ display: "{flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <div >
                        <h3 style={{ fontWeight: "600" }}><strong>{item.price}</strong></h3>
                        <h4 style={{ color: "#808080" }}>Price for {item.tourists}</h4>
                    </div>
                    <div className = "row-container" style ={{display:"flex", alignItems:"center"}}>
                        <SiteButton width = "160px" to={"/product/" + item.slug} buttonType={ButtonTypes.Black} text="Learn More " />
   
        <img
            src="/img/like.png"
            style={{
                marginLeft:"20px",
                width: "24px",
                display: "block"
            }}
        />

                    </div>

                </div>
            </div>
        </SiteBlock>
    );
}

function ProductCardSmall({ item }: { item: ProductPageSection }) {
    return (
        <SiteBlock width="100%" height="auto">
            <div className="column-container" style={{ margin: "20px", display: "flex", justifyContent: "space-between" }}>
                <div className="column-container" style={{ width: "100%" }}>
                    <img style={{ width: "100%", height: "210px", marginTop: "20px", borderRadius: "24px", objectFit: "cover" }} src={item.imageUrl[0]} />
                    <div className="column-container" style={{ margin: "20px" }}>
                        <h3 style={{ fontWeight: "600" }}><strong>{item.name}</strong></h3>
                        <h4 style={{ color: "#808080" }}>{item.location}</h4>
                        <h4 style={{ color: "#808080", marginTop: "-12px" }}>{item.date}</h4>
                        <div className="stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div className="star" key={i}>
                                    <img src="/img/rating.png" alt="star" />
                                    <div
                                        className="star-fill"
                                        style={{
                                            width:
                                                item.rating >= i + 1
                                                    ? "100%"
                                                    : item.rating > i
                                                        ? `${(item.rating - i) * 100}%`
                                                        : "0%"
                                        }}
                                    />
                                </div>
                            ))}
                        <h4 style={{ color: "#18150E" }}>{item.rating}</h4>
                        </div>
                        <h4 style={{ color: "#18150E" }}>{item.description}</h4>
                        <h4 style={{ color: "#808080"}}>{item.departure}</h4>

                    </div>
                </div>
                <div className="column-container" style={{width:"100%", marginTop: "20px" ,marginBottom:"20px", alignItems:"center"}}>
                        <h3 style={{ fontWeight: "600" }}><strong>{item.price}</strong></h3>
                        <h4 style={{ color: "#808080" }}>Price for {item.tourists}</h4>
                           <div className = "row-container" style ={{display:"flex", alignItems:"center"}}>
                        <SiteButton  to={"/product/" + item.slug} buttonType={ButtonTypes.Black} text="Learn More " />
   
        <img
            src="/img/like.png"
            style={{
                marginLeft:"20px",
                width: "24px",
                display: "block"
            }}
        />

                    </div>

                </div>
            </div>

        </SiteBlock>
    );
}




export default function Deals() {
    const { isSmallScreen } = useContext(AppContext);
    const ITEMS_STEP = 5;
    const [visibleCount, setVisibleCount] = useState(ITEMS_STEP);
    const [products, setProducts] = useState<ProductPageSection[]>([]);

    useEffect(() => {
        ProductDao.getProducts()
            .then(setProducts)
            .catch(console.error);
    }, []);

    return (
        <>
          <div className="block" style={{ marginTop: "0", paddingTop: "180px" }}>
            <SiteTitle title="We’re flying tomorrow!" subtitle="HOT DEALS" />
            <h3 style={{ color: "#808080", marginTop: "20px" }}>
                Book now — the best destinations at a great price.
                <strong> Limited seats, maximum discounts.</strong>
            </h3>
            {!isSmallScreen &&
                <div>
                    {products.slice(0, visibleCount).map((item) => (
    <Link
        key={item.slug}
        to={`/product/${item.slug}`}
        className="text-decoration-none"
    >
        <ProductCardBig item={item} />
    </Link>
))}

                </div>
            }
            {isSmallScreen &&
                <div>
                    {products.slice(0, visibleCount).map((item) => (
    <Link
        key={item.slug}
        to={`/product/${item.slug}`}
        className="text-decoration-none"
    >
        <ProductCardSmall item={item} />
    </Link>
))}

                </div>
            }

            {visibleCount < products.length && (
                <h3 className="block-text-center" style={{ marginTop: "50px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                    onClick={() =>
                        setVisibleCount(prev =>
                            Math.min(prev + ITEMS_STEP, products.length)
                        )
                    }>Download More<img src="/img/reload.png" style={{ marginLeft: "24px" }} />
                </h3>
            )}

        </div>
         <div className="block">
            
                        <div className="four-grid">
            
                            <div className="four-intro">
                                <SiteTitle title="Why Hot Deals?" subtitle="BENEFITS OF HOT DEALS" />
                            </div>
            
                            <div className="column-container" >
                                <SiteBlock height='300px'>
                                    <img src="/img/01.png" className="block-img1" />
                                    <div className="block-text1">
                                        <h3>Savings up to 50% off the standard price</h3>
                                    </div>
                                </SiteBlock>
                                <SiteBlock height='300px' >
                                    <img src="/img/03.png" className="block-img1" />
                                    <div className="block-text1">
                                        <h3>Selection of tours even one day before departure</h3>
                                    </div>
                                </SiteBlock>
                            </div>
            
                            <div className="column-container" >
                                <SiteBlock height='300px'>
                                    <img src="/img/02.png" className="block-img1" />
                                    <div className="block-text1">
                                        <h3>Selected hotels and proven operators</h3>
                                    </div>
                                </SiteBlock>
                                <SiteBlock height='300px'>
                                    <img src="/img/04.png" className="block-img1" />
                                    <div className="block-text1">
                                        <h3>Convenient and fast search</h3>
                                    </div>
                                </SiteBlock>
                            </div>
            
                        </div>
            
                    </div>
        </>
      
    );
}
